import { Button } from "@/components/ui/button";
import products from "@/products";
import { motion } from "framer-motion";
import { Asterisk, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ServiceBox from "../components/service-box";

export default function ServicesSection() {
  const [expand, setExpand] = useState(true);

  return (
    <>
      <div style={{ zIndex: "-1" }} className="fixed inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-orange-600/30 rounded-full blur-[120px] -top-40 -right-20 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-orange-900/30 rounded-full blur-[120px] -bottom-20 -left-40" />
        <div className="absolute inset-0 backdrop-blur-[60px]" />
      </div>
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
              <div
                className=""
                style={{
                  display: "flex",
                  border: "",
                  width: "",
                  marginTop: "2rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "2rem",
                }}
              >
                {products.map((e: any) => (
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
                        alt="Civil works"
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

            {/* <br/><br/>
                <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See more Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
                </div>
                
                <br/><br/> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}
