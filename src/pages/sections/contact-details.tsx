import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AtSign, Phone, Printer, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  more?: boolean;
}

export default function ContactDetails(props: Props) {
  const [mounted, setMounted] = useState(false);
  const usenavigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {
        // Why Choose Us Section
        mounted ? (
          <div
            className="page"
            id="page"
            style={{
              display: "flex",
              alignItems: "center",
              border: "",
              background: "linear-gradient(90deg, orangered, brown)",
              borderRadius: "1rem",
              height: "65svh",
              width: "100%",
            }}
          >
            {/* <img
              alt="blue-background"
              src=""
              style={{
                position: "absolute",
                zIndex: -1,
                width: "100%",
                height: "100svh",
                objectFit: "cover",
              }}
            /> */}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.25 }}
              initial="hidden"
              whileInView="visible"
              style={{
                zIndex: 1,
                width: "100%",
                border: "",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "column",
                margin: "",
              }}
            >
              <div style={{ border: "", display: "flex" }}>
                <div
                  className="items-container"
                  style={{
                    border: "",
                    margin: "2.75rem",
                    display: "flex",
                  }}
                >
                  <div
                    className="flexer"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      left: "",
                      border: "",
                    }}
                  >
                    <img
                      src="/plant.jpg"
                      style={{
                        borderRadius: "1rem",
                        objectFit: "cover",
                        width: "48ch",
                        height: "30ch",
                        boxShadow: "1px 1px 50px black",
                        // border: "0.5rem solid orangered",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "space-between",
                      justifyContent: "center",
                      border: "",
                      flexFlow: "column",
                      flex: 1,
                      gap: "2.25rem",
                      color: "white",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 600,
                        textShadow: "1px 1px 10px rgba(255 255 255/ 50%)",
                        lineHeight: "2rem",
                        textDecoration: "",
                        textUnderlineOffset: "0.25rem",
                        textDecorationColor: "crimson",
                      }}
                    >
                      Contact Details
                    </h1>

                    {/* <p className="desc" style={{ opacity: 0.75, border: "" }}>
                      At Sohar Star United, we bring a unique combination of
                      expertise, reliability, and client-focused service to
                      every project. We hold ourselves to the highest standards,
                      ensuring that every project meets or exceeds industry
                      benchmarks. Our team is comprised of skilled professionals
                      with a proven track record in the contracting industry.
                      From project managers to field specialists, every team
                      member is dedicated to delivering outstanding outcomes.
                    </p> */}

                    <div
                      style={{
                        display: "flex",
                        flexFlow: "column",
                        gap: "1rem",
                        opacity: 0.75,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          border: "",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ border: "" }}>
                          <Phone color="orange" />
                        </div>

                        <a
                          className="ghost"
                          style={{
                            background: "rgba(100 100 100/ 50%)",
                            width: "fit-content",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            border: "solid orange",
                          }}
                          href="tel:+96826701512"
                        >
                          +968 26701512
                        </a>
                      </div>

                      <div
                        style={{
                          border: "",
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ border: "" }}>
                          <Printer color="orange" width={"1.5rem"} />
                        </div>

                        <a
                          className="ghost"
                          style={{
                            background: "rgba(100 100 100/ 50%)",
                            width: "fit-content",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            border: "solid orange",
                          }}
                          href="tel:+96826701633"
                        >
                          +968 26701633
                        </a>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ border: "" }}>
                          <Smartphone color="orange" width={"1.5rem"} />
                        </div>

                        <a
                          className="ghost"
                          style={{
                            background: "rgba(100 100 100/ 50%)",
                            width: "fit-content",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            border: "solid orange",
                          }}
                          href="tel:+96898897837"
                        >
                          +968 98897837
                        </a>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ border: "" }}>
                          <AtSign color="orange" width={"1.5rem"} />
                        </div>
                        <a
                          className="ghost"
                          style={{
                            background: "rgba(100 100 100/ 50%)",
                            width: "fit-content",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            border: "solid orange",
                          }}
                          href="mailto:sales@wahatoman.com"
                        >
                          sales@wahatoman.com
                        </a>
                      </div>

                      {/* <div style={{ display: "flex", gap: "0.75rem" }}>
                        <div style={{ border: "" }}>
                          <Lightbulb color="orange" width={"1.5rem"} />
                        </div>

                        <p>Dedicated Customer Support</p>
                      </div> */}
                    </div>

                    {/* <a href="#projects" style={{position:"absolute", alignSelf:"center", marginTop:"22rem", display:"flex", flexFlow:"column", alignItems:"center"}}>
                            <p style={{fontSize:"0.8rem", opacity:0.5}}>View Our Projects</p>
                            <br/>
                            <button className="arrow">
                                <ChevronDown color="crimson" width={"2.5rem"} height={"2.5rem"}/>
                            </button>
                        </a> */}

                    {props.more && (
                      <div
                        onClick={() => usenavigate("/about")}
                        style={{
                          width: "fit-content",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          name="Read more"
                          className=" skewed-button"
                          style={{
                            transition: "0.3s",
                            background: "white",
                            display: "flex",
                            width: "10rem",
                          }}
                        ></Button>
                        <div
                          className=""
                          style={{
                            display: "flex",
                            position: "absolute",
                            color: "orangered",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            fontSize: "0.9rem",
                          }}
                        >
                          <p style={{ cursor: "pointer" }}>Read More</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null
      }
    </>
  );
}
