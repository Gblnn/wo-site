import { Link } from "react-router-dom";

interface Props {
  desktop?: boolean;
}

export default function MobileNav(props: Props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          fontWeight: 500,
          gap: props.desktop ? "1.5rem" : "0.45rem",
          fontSize: props.desktop ? "0.9rem" : "0.85rem",
          justifyContent: "center",
          textTransform: props.desktop ? "uppercase" : "capitalize",
          letterSpacing: props.desktop ? "0.05rem" : "",
        }}
      >
        <Link
          className={location.pathname == "/" ? "nav-active" : "nav-item"}
          style={{
            border: "",
            width: props.desktop ? "" : "5rem",
            textAlign: "center",
          }}
          to="/"
        >
          Home
        </Link>

        <Link
          className={
            location.pathname == "/products" ? "nav-active" : "nav-item"
          }
          style={{
            border: "",
            width: props.desktop ? "" : "5rem",
            textAlign: "center",
          }}
          to="/products"
        >
          Products
        </Link>

        <Link
          className={location.pathname == "/about" ? "nav-active" : "nav-item"}
          style={{
            border: "",
            width: props.desktop ? "" : "5rem",
            textAlign: "center",
          }}
          to="/about"
        >
          About
        </Link>

        <Link
          className={
            location.pathname == "/contact" ? "nav-active" : "nav-item"
          }
          style={{
            border: "",
            width: props.desktop ? "" : "5rem",
            textAlign: "center",
          }}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
