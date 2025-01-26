import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  let location = useLocation();
  const usenavigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "6rem",
          width: "100%",
          bottom: "0",
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          transition: "0.5s",
          userSelect: "none",
        }}
      >
        <div
          style={{
            width: "29ch",
            border: "",
            background: "rgba(50 50 50/ 50%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            height: "3rem",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.25rem",
            transition: "0.5s",
          }}
        >
          <p
            onClick={() => usenavigate("/")}
            className={location.pathname == "/" ? "nav-active" : "nav-item"}
          >
            Home
          </p>
          <p
            onClick={() => usenavigate("/products")}
            className={
              location.pathname == "/products" ? "nav-active" : "nav-item"
            }
          >
            Products
          </p>
          <p
            onClick={() => usenavigate("/about-us")}
            className={
              location.pathname == "/about-us" ? "nav-active" : "nav-item"
            }
          >
            About Us
          </p>
        </div>
      </div>
    </>
  );
}
