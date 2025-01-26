import { useNavigate } from "react-router-dom";

export default function Header() {
  const usenavigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "6.5rem",
          border: "",
          background: "rgba(100 100 100/ 20%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          position: "fixed",
          width: "100%",
          zIndex: "1",
        }}
      >
        <div
          onClick={() => usenavigate("/")}
          style={{
            cursor: "pointer",
            background: "rgba(100 100 100/ 20%)",

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
          {/* <img src="/logo.png" width={"50rem"} /> */}
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
                fontWeight: 800,
              }}
            >
              Industrial Gases
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
