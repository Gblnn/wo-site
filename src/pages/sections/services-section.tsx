import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import products from "@/products";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Asterisk, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import ServiceBox from "../../components/service-box";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const [expand, setExpand] = useState(true);
  const usenavigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <div
          id="services"
          style={{
            display: "flex",
            height: "",
            paddingTop: "4rem",
            boxShadow: "",
            background: "",
          }}
        >
          <div
            style={{
              margin: "1.5rem",
              marginTop: "5rem",
              marginBottom: "8rem",
              border: "",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                marginLeft: "",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <Asterisk
                className="animate-pulse"
                color="orangered"
                strokeWidth={"0.2rem"}
                width={"2rem"}
                height={"2rem"}
              />
              Our Products
            </h1>

            <div
              style={{
                border: "",
                width: "100%",
                display: "flex",
                marginTop: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="carousel"
                style={{ border: "", padding: "", width: "105ch" }}
              >
                <CarouselPrevious style={{}} />
                <CarouselContent
                  className="hover:cursor-grab active:cursor-grabbing"
                  style={{
                    gap: "0rem",
                    width: "auto",
                    border: "",
                    padding: "1rem",
                  }}
                >
                  {products.map((e: any) => (
                    <CarouselItem
                      key={e.id}
                      className="sm:basis-1/1 lg:basis-1/3"
                    >
                      <ServiceBox
                        key={e.id}
                        // onClick={() => usenavigate("/civil-engineering")}
                        title={e.name}
                        desc=""
                        icon={
                          // <DraftingCompass width={"2.5rem"} height={"2.5rem"} />
                          <img
                            src={e.src}
                            style={{ height: "80%", objectFit: "cover" }}
                            alt={e.name}
                          />
                        }
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext />
              </Carousel>

              <div
                className="sm-services"
                style={{
                  border: "",
                  width: "",
                  marginTop: "2rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "2rem",
                }}
              >
                {products.slice(0, 4).map((e: any) => (
                  <ServiceBox
                    key={e.id}
                    // onClick={() => usenavigate("/civil-engineering")}
                    title={e.name}
                    icon={
                      // <DraftingCompass width={"2.5rem"} height={"2.5rem"} />
                      <img
                        src={e.src}
                        style={{
                          height: "100%",
                          objectFit: "contain",
                          border: "",
                          width: "80%",
                        }}
                        alt={e.name}
                      />
                    }
                  />
                ))}
              </div>

              <div
                className="sm-services"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Button
                  onClick={() => {
                    setExpand(!expand);
                  }}
                  variant={"ghost"}
                  style={{
                    width: "32ch",
                    display: "none",
                    gap: "0.5rem",
                    alignItems: "center",
                    alignSelf: "center",
                    background: "rgba(100 100 100/ 10%)",
                    boxShadow: "1px 1px 10px rgba(0 0 0/ 10%)",
                  }}
                >
                  {expand ? (
                    <>
                      Collapse
                      <ChevronUp width={"1rem"} color="crimson" />
                    </>
                  ) : (
                    <>
                      Show More
                      <ChevronDown width={"1rem"} color="crimson" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* <a href="#page" className="arrow" style={{marginTop:""}}>
                                <button >
                                    <ChevronDown color="crimson" width={"2.5rem"} height={"2.5rem"}/>
                                </button>
                            </a> */}

            <br />
            <br />
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => usenavigate("/products")}
                variant={"ghost"}
                style={{
                  width: "32ch",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  alignSelf: "center",
                  background: "rgba(100 100 100/ 10%)",
                  boxShadow: "1px 1px 10px rgba(0 0 0/ 10%)",
                }}
              >
                See All <ChevronRight width={"1rem"} color="orangered" />
              </Button>
            </div>

            <br />
            <br />
          </div>
        </div>
      </motion.div>
    </>
  );
}
