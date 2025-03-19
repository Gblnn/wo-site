import { motion } from "framer-motion";
import { siteContent } from "@/config/content";
import PageTransition from "@/components/page-transition";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Asterisk } from "lucide-react";

interface Product {
  id: string;
  name: string;
  src: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>(siteContent.products);
  const [loading, setLoading] = useState(false);

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
          setProducts(productsData);
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
    <PageTransition>
      <div className="min-h-screen bg-black text-white pt-24">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] bg-orange-600/30 rounded-full blur-[120px] -top-40 -right-20 animate-pulse" />
          <div className="absolute w-[600px] h-[600px] bg-orange-900/30 rounded-full blur-[120px] -bottom-20 -left-40" />
          <div className="absolute inset-0 backdrop-blur-[60px]" />
        </div>

        {/* Main Content */}
        <main className="relative z-10 p-6">
          <div className="max-w-7xl mx-auto">
            <div
              style={{
                border: "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="text-center mb-12 mt-4"
            >
              <Asterisk color="orangered" height={"3rem"} width={"3rem"} />
              <h1 className="text-3xl font-medium">Our Products</h1>
            </div>

            {loading ? (
              <div className="flex justify-center items-center min-h-[60vh]">
                <div className="w-8 h-8 border-4 border-orangered border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] bg-black/20 backdrop-blur-sm rounded-t-xl overflow-hidden p-6 flex items-center justify-center">
                      <img
                        src={product.src}
                        alt={product.name}
                        className="w-[80%] h-[80%] object-contain mix-blend-lighten"
                      />
                    </div>
                    <div className="p-6 border-t border-white/10">
                      <h3 className="text-xl font-semibold text-center">
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      <style>{`
        .glass-card {
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 0.75rem;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </PageTransition>
  );
};

export default Products;
