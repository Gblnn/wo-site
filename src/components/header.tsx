import moment from "moment";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate } from "react-router-dom";
import MobileNav from "./mobile-nav";
import RopeLights from "./ropelights";

export default function Header() {
  const usenavigate = useNavigate();
  const [explode] = useState(false);

  return (
    <>
      {/* <div
        onClick={() => setExplode(!explode)}
        style={{
          cursor: "pointer",
          border: "",
          height: "2rem",
          background: "linear-gradient(90deg, orangered,midnightblue)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          color: "white",
        }}
      >
        <Cog width={"1rem"} color="red" />
        <p style={{ fontSize: "0.8rem" }}>Site is under maintainence.</p>

        <PartyPopper className="animate-pulse" width={"1rem"} color="salmon" />
        <p style={{ fontSize: "0.8rem" }}>
          Welcome New Year
          <b style={{}}> 2025</b>
        </p>
      </div> */}

      <div
        className="nav-bar"
        style={{
          display: "flex",
          height: "6rem",
          alignItems: "center",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 15,
          boxShadow: "1px 1px 20px rgba(0 0 0/ 50%)",
          border: "",
        }}
      >
        <div
          className="title active:bg-gray-800"
          onClick={() => {
            usenavigate("/");
            window.scrollTo(0, 0);
          }}
          style={{
            cursor: "pointer",

            // background: "rgba(100 100 100/ 20%)",
            // marginLeft: "1.5rem",
            display: "flex",

            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingTop: "0.75rem",
            paddingBottom: "0.25rem",

            borderRadius: "0.75rem",
            // marginLeft: "1.5rem",
            textTransform: "uppercase",
            flexFlow: "row",
            lineHeight: "1.5rem",
            alignItems: "center",
            border: "",
            gap: "0.75rem",
          }}
        >
          <img src="/logo.png" width={"50rem"} alt="logo" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexFlow: "column",
              color: "white",
              mixBlendMode: "difference",
            }}
          >
            <p
              style={{
                fontWeight: "800",
                fontSize: "2rem",
                letterSpacing: "0.25rem",
                mixBlendMode: "overlay",
              }}
            >
              Wahat Oman
            </p>
            <p
              style={{
                letterSpacing: "0.5rem",
                fontSize: "0.75rem",
                color: "orangered",
                fontWeight: 900,
              }}
            >
              Industrial Gases
            </p>
          </div>
        </div>

        <div className="nav" style={{ marginRight: "4rem" }}>
          <MobileNav desktop />
        </div>
      </div>

      <div
        style={{
          border: "",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {explode && <ConfettiExplosion />}
      </div>
      {moment().format("DD/MM") == "01/01" && <RopeLights />}

      <div
        className="mobile-nav nav-bar"
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          justifyContent: "center",
          zIndex: 100,
          fontSize: "1rem",
          height: "4.5rem",
          alignItems: "center",
          boxShadow: "1px 1px 20px rgba(0 0 0/ 50%)",
        }}
      >
        <MobileNav />
      </div>
    </>
  );
}
