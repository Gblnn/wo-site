import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  editMode?: boolean;
}

export default function Landing(props: Props) {
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
          borderBottom: props.editMode ? "solid orangered" : "",
          zIndex: "10",
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
            borderRadius: "1rem",
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

        <div
          style={{
            marginTop: "28rem",
            border: props.editMode ? "solid" : "",
            padding: "0.5rem",
          }}
        >
          <p style={{ wordSpacing: "0.5rem", zIndex: 1 }}>
            Manufacturing <b style={{ color: "orangered" }}>|</b> Supply{" "}
            <b style={{ color: "orangered" }}>| </b>
            Hydro-Testing
          </p>
        </div>

        <ChevronDown
          className="animate-bounce"
          width={"2rem"}
          height={"2rem"}
          color="orangered"
          style={{ position: "absolute", marginTop: "22rem" }}
        />
        <p
          style={{
            display: props.editMode ? "flex" : "none",
            position: "absolute",
            bottom: 0,
            left: 0,
            paddingLeft: "1rem",
            paddingRight: "1rem",
            background: "orangered",
          }}
        >
          Landing Section
        </p>
      </div>
    </>
  );
}
