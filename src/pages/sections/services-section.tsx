import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { siteContent } from "@/config/content";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ServiceBox from "@/components/service-box";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase/config";

interface Props {
  editMode?: boolean;
}

interface Product {
  id: string;
  name: string;
  src: string;
}

export default function ServicesSection({ editMode }: Props) {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>(siteContent.products);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "product-list"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">),
        }));
        if (productsData.length > 0) {
          setProducts(productsData.slice(0, 4));
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0 }}
    >
      <div className="w-full flex justify-center items-center p-6">
        <div className="max-w-[80rem] w-full flex flex-col gap-6">
          <br />
          <div
            style={{ border: "" }}
            className="flex justify-center items-center"
          >
            <h2 className="text-2xl font-semibold tracking-wide">
              Product Catalogue
            </h2>
          </div>
          <br />

          {isMobile ? (
            // Grid view for mobile
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="flex justify-center">
                  <ServiceBox img={product.src} title={product.name} centered />
                </div>
              ))}
            </div>
          ) : (
            // Carousel for desktop
            <div className="relative w-[85%] mx-auto">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  skipSnaps: false,
                  slidesToScroll: 1,
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-1">
                  {loading ? (
                    <div className="flex justify-center items-center h-32 w-full">
                      <div className="w-8 h-8 border-4 border-orangered border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : (
                    products.map((product) => (
                      <CarouselItem
                        key={product.id}
                        className="pl-1 basis-full md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="flex justify-center w-[320px] mx-auto">
                          <ServiceBox
                            img={product.src}
                            title={product.name}
                            centered
                          />
                        </div>
                      </CarouselItem>
                    ))
                  )}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
              </Carousel>
            </div>
          )}

          <br />

          <div className="w-full flex justify-center">
            <Button
              style={{ width: "28ch" }}
              onClick={() => navigate(editMode ? "/product-edit" : "/products")}
              className="bg-[rgba(100,100,100,0.1)] hover:bg-[rgba(100,100,100,0.2)] shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              {editMode ? "Update Product Catalogue" : "See All"}
              <ChevronRight color="orangered" className="w-4 h-4 " />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
