import { ChevronDown } from "lucide-react";

export default function Landing() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100svh",
          background: "black",
        }}
      >
        <img
          alt="background"
          src="https://giffiles.alphacoders.com/222/222700.gif"
          width={"500rem"}
          style={{ opacity: 0.5 }}
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
            padding: "1.5rem",
            color: "white",
          }}
        >
          Leading Distributor of{" "}
          <b style={{ color: "orangered" }}>Industrial Gases</b> in Oman{" "}
        </p>
        <ChevronDown
          className="animate-bounce"
          width={"1.5rem"}
          color="orangered"
          style={{ position: "absolute", marginTop: "22rem" }}
        />
      </div>
    </>
  );
}
