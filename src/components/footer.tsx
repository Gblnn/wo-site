import { LinkIcon, Mail, Mails, Phone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        // boxShadow: "1px 1px 10px black",
        width: "100%",
        fontSize: "0.8rem",
        display: "flex",
        justifyContent: "center",
        bottom: 0,
        border: "",
        flexFlow: "column",
        padding: "",
        alignItems: "center",
        background: "linear-gradient(90deg,#064E3B, darkgreen)",
      }}
    >
      <div
        className="items-container"
        style={{
          display: "flex",
          flexFlow: "column",
          border: "",
          padding: "2rem",
          gap: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2.5rem",
            width: "",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "",
              justifyContent: "",
              flexWrap: "wrap",
              gap: "2.5rem",
              width: "",
            }}
          >
            {/* Get in Touch */}
            <div style={{ border: "", display: "flex", flexFlow: "column" }}>
              <p style={{ fontSize: "1rem", fontWeight: 600 }}>GET IN TOUCH</p>
              <br />

              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  gap: "0.5rem",
                  letterSpacing: "0.05rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    letterSpacing: "0.05rem",
                  }}
                >
                  <Smartphone
                    color="orangered"
                    width={"1rem"}
                    strokeWidth={"0.2rem"}
                  />
                  <a
                    href="tel:98897837"
                    className="ghost"
                    style={{ background: "rgba(100 100 100/ 40%)" }}
                  >
                    98897837
                  </a>
                  <a
                    href="tel:98456245"
                    className="ghost"
                    style={{ background: "rgba(100 100 100/ 40%)" }}
                  >
                    98456245
                  </a>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Phone
                    color="orangered"
                    width={"1rem"}
                    strokeWidth={"0.2rem"}
                  />
                  <a
                    href="tel:26701512"
                    className="ghost"
                    style={{ background: "rgba(100 100 100/ 40%)" }}
                  >
                    26701512
                  </a>

                  <a
                    href="tel:26701633"
                    className="ghost"
                    style={{ background: "rgba(100 100 100/ 40%)" }}
                  >
                    {"26701633"}
                  </a>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Mails
                    color="orangered"
                    width={"1rem"}
                    strokeWidth={"0.2rem"}
                  />
                  <a
                    href="mailto:sales@wahatoman.com"
                    className="ghost"
                    style={{
                      background: "rgba(100 100 100/ 40%)",
                      width: "10rem",
                    }}
                  >
                    sales@wahatoman.com
                  </a>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Mail
                    color="orangered"
                    width={"1rem"}
                    strokeWidth={"0.2rem"}
                  />
                  <a
                    href="mailto:wahatoman@gmail.com"
                    className="ghost"
                    style={{
                      background: "rgba(100 100 100/ 40%)",
                      width: "10rem",
                    }}
                  >
                    wahatoman@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ border: "", display: "flex", flexFlow: "column" }}>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <LinkIcon
                  width={"1rem"}
                  color="orangered"
                  strokeWidth={"0.2rem"}
                />
                QUICK LINKS{" "}
              </p>
              <br />
              <div
                style={{
                  display: "flex",
                  gap: "2.5rem",
                  fontSize: "0.9rem",
                  border: "",
                  height: "",
                }}
              >
                <div
                  style={{ display: "flex", flexFlow: "column", gap: "0.7rem" }}
                >
                  <Link className="link" to="/products">
                    Our Products
                  </Link>
                  <Link className="link" to="/about">
                    About Us
                  </Link>
                  <Link className="link" to="/contact">
                    Contact Us
                  </Link>
                  {/* <Link className="link" to="">
                  Quality Certifications
                </Link> */}
                </div>
                <div
                  style={{ display: "flex", flexFlow: "column", gap: "0.7rem" }}
                >
                  {/* <Link className="link" to="">
                  About Us
                </Link> */}
                  {/* <Link className="link" to="/projects">
                    Projects
                  </Link>
                  <Link className="link" to="/careers">
                    Careers
                  </Link>
                  <Link className="link" to="/contact-us">
                    Contact Us
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "",
            paddingBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "3rem",
          }}
        >
          {/* <br /> */}

          <div>
            <img
              src="/logo.png"
              width={"50rem"}
              style={{ border: "" }}
              alt="logo"
            />
            <div style={{ height: "0.75rem" }}></div>
            <p style={{ fontSize: "1rem", fontWeight: 600 }}>
              WAHAT OMAN INDUSTRIAL GASES
            </p>

            <div
              style={{
                display: "flex",
                flexFlow: "column",
                gap: "",
                letterSpacing: "0.05rem",
              }}
            >
              <p style={{ opacity: 0.5, fontSize: "0.85rem" }}>
                P.O. Box: 162, PC: 325, Phase No : 5, Suhar Industrial City, Way
                No : 508 Sultanate of Oman
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          margin: "",
          wordSpacing: "0.1rem",
          border: "",
          padding: "1rem",
          background: "rgba(100 100 100/ 40%)",
          width: "100%",
          justifyContent: "center",
          boxShadow: "1px 1px 20px rgba(0 0 0/50%)",
        }}
      >
        <div
          className="items-container"
          style={{ display: "flex", border: "", justifyContent: "center" }}
        >
          <p>
            Copyrights Reserved {String(moment().year())} &copy;{" "}
            <strong style={{ fontWeight: 500 }}> WAHAT OMAN </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
