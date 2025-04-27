import { motion } from "framer-motion";
import {
  Mail,
  Mails,
  MailsIcon,
  MapPin,
  MapPinned,
  Phone,
  Smartphone,
} from "lucide-react";

export default function ContactUs() {
  // const usenavigate = useNavigate()

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div style={{ zIndex: "-1" }} className="fixed inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-orange-600/30 rounded-full blur-[120px] -top-40 -right-20 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-orange-900/30 rounded-full blur-[120px] -bottom-20 -left-40" />
        <div className="absolute inset-0 backdrop-blur-[60px]" />
      </div>
      <div
        id="projects"
        className="page"
        style={{
          border: "",
          height: "auto",
          paddingTop: "6rem",
          // background: "rgba(100 100 100/ 5%)",
        }}
      >
        <div
          style={{
            margin: "1.5rem",
            marginTop: "",
            border: "",
            // width: "100%",
          }}
        >
          <div
            style={{
              border: "",
              width: "100%",
              display: "flex",
              marginTop: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                border: "",
                width: "100%",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <h1
                style={{
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <MapPin color="orangered" />
                Address
              </h1>

              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  padding: "1.25rem",
                  border: "",
                  borderRadius: "0.5rem",
                  background: "rgba(100 100 100/ 10%)",
                  backdropFilter: "blur(16px)",
                  gap: "0.5rem",
                  paddingLeft: "1.25rem",
                }}
              >
                {/* <div style={{display:"flex", flexFlow:"column"}}>
                            <h1 style={{fontWeight:500, fontSize:"1.1rem", textTransform:"uppercase", letterSpacing:"0.025rem"}}>Sohar Star United LLC</h1>
                        </div>

                        <br/> */}

                <p
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    fontSize: "0.8rem",
                    alignItems: "center",
                  }}
                >
                  <MailsIcon color="orangered" width={"1rem"} />
                  Suhar Industrial Estate, Phase 5, Way : 508
                  {/* Way No : 508 */}
                </p>

                <p
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    fontSize: "0.8rem",
                    alignItems: "center",
                  }}
                >
                  <MapPinned color="orangered" width={"1rem"} />
                  Falaj Al-Qabail Sultanate of Oman
                </p>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <p
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "6.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <Phone color="orangered" width={"1rem"} />
                    26701512
                  </p>

                  <div
                    className=""
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "7rem",
                      justifyContent: "center",
                    }}
                  >
                    {/* <p
                      style={{
                        width: "1.25rem",
                        color: "dodgerblue",
                        fontWeight: "600",
                      }}
                    >
                      Fax
                    </p> */}
                    {/* <p className="ghost">
                      <b style={{ color: "dodgerblue", fontWeight: 500 }}> </b>{" "}
                      26842701
                    </p> */}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a
                    href="tel:98897837"
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "6.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <Smartphone color="orangered" width={"1rem"} />
                    98897837
                  </a>

                  <a
                    href="tel:98456245"
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "6.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <Smartphone color="orangered" width={"1rem"} />
                    <p>98456245</p>
                  </a>
                </div>

                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                >
                  <a
                    href="mailto:sales@wahatoman.com"
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "11.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <Mails color="orangered" width={"1rem"} />
                    <p>sales@wahatoman.com</p>
                  </a>

                  <a
                    href="mailto:wahatoman@gmail.com"
                    className="ghost"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      alignItems: "center",
                      width: "11.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <Mail color="orangered" width={"1rem"} />
                    wahatoman@gmail.com
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.749652572543!2d56.57714957482646!3d24.430880162313553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8b49ea68f4e8c9%3A0xe11b51cf20723302!2sWahat%20Oman%20Industrial%20Gases%20L.L.C!5e1!3m2!1sen!2som!4v1738997255649!5m2!1sen!2som"
                width="100%"
                height="450"
                style={{ border: "0", borderRadius: "1rem" }}
                loading="lazy"
              ></iframe>
            </div>

            {/* <MapLocation /> */}

            {/* <Project img="https://static6.depositphotos.com/1000292/649/i/450/depositphotos_6490033-stock-photo-water-recycling-on-sewage-treatment.jpg" title="Project 1" desc="Brief description of project 1"/>

                <Project img="/pxfuel.jpg" title="Project 2" desc="Brief description of project 2"/>

                <Project img="https://st4.depositphotos.com/5797516/24306/i/450/depositphotos_243067188-stock-photo-landscape-oil-gas-refinery-manufacturing.jpg" title="Project 3" desc="Brief description of project 3"/>

                <Project img="https://motionarray.imgix.net/motion-array-1096692-auDdGLclkD-high_0009.jpg?w=660&q=60&fit=max&auto=format" title="Project 4" desc="Brief description of project 4"/> */}
          </div>

          {/* <br/><br/>
                <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                <Button onClick={()=>usenavigate("/projects")} variant={"ghost"} style={{width:"32ch", display:"flex", gap:"0.5rem", alignItems:"center", alignSelf:"center", background:"rgba(100 100 100/ 10%)", boxShadow:"1px 1px 10px rgba(0 0 0/ 10%)"}}>See more Projects <ChevronRight width={"1rem"} color="crimson"/></Button>
                </div>
                
                <br/><br/> */}
        </div>
      </div>
    </motion.div>
  );
}
