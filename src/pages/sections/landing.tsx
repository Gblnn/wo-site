import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const usenavigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100svh",
          background: "black",
          border: "",
          top: 0,
          flexFlow: "column",
        }}
      >
        <img
          alt="background"
          src="https://giffiles.alphacoders.com/222/222700.gif"
          width={"500rem"}
          style={{ opacity: 0.5, position: "absolute" }}
        />
        <p
          style={{
            border: "",
            textAlign: "center",
            position: "absolute",
            fontSize: "3rem",
            fontWeight: "400",
            lineHeight: "2.5rem",
            width: "",
            padding: "2rem",
            color: "white",
          }}
        >
          Leading Distributor of{" "}
          <b
            onClick={() => usenavigate("/products")}
            className=""
            style={{
              color: "orangered",

              cursor: "pointer",
            }}
          >
            Industrial Gases
          </b>{" "}
          in {/* 🇴🇲 */}
          Oman{" "}
        </p>

        <p style={{ wordSpacing: "0.5rem", marginTop: "28rem", opacity: 1 }}>
          Manufacturing <b style={{ color: "orangered" }}>|</b> Supply{" "}
          <b style={{ color: "orangered" }}>| </b>
          Hydro-Testing
        </p>

        <ChevronDown
          className="animate-bounce"
          width={"2rem"}
          height={"2rem"}
          color="orangered"
          style={{ position: "absolute", marginTop: "22rem" }}
        />
      </div>
    </>
  );
}
