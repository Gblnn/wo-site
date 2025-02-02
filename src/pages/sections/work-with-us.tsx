import { ChevronRight, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WorkWithUs() {
  const usenavigate = useNavigate();
  return (
    <div
      style={{
        border: "",
        height: "22ch",
        background: "linear-gradient(90deg, orangered, brown)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        boxShadow: "1px 1px 20px black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "0rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Lets Get Acquainted
        </p>
        {/* <p style={{ opacity: "0.75" }}></p> */}
        <br />
        <button
          onClick={() => usenavigate("/contact")}
          className="glow"
          style={{
            transition: "0.3s",
            display: "flex",
            gap: "0.5rem",
            background: "white",
            color: "brown",
            padding: "0.25rem",
            borderRadius: "0.5rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: "0.9rem",
            alignItems: "center",
          }}
        >
          <Handshake width={"1rem"} />
          Get in touch
          <ChevronRight width={"1rem"} />
        </button>
      </div>
    </div>
  );
}
