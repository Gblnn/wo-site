import { MapPin } from "lucide-react";
import ContactDetails from "./sections/contact-details";

export default function Contact() {
  return (
    <div
      style={{
        border: "",
        width: "100%",
        height: "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "",
        flexFlow: "column",
        paddingTop: "8rem",
      }}
    >
      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            borderRadius: "1rem",
            height: "32ch",
            width: "100%",
            background: "no-repeat center/100% url('/plant.png')",
            backgroundColor: "rgba(255 69 0/ 20%)",
            backgroundBlendMode: "hard-light",
            backgroundPosition: "cover",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "600",
              textShadow: "1px 1px 10px black",
            }}
          >
            Contact Us
          </h1>
        </div>

        <br />
        <br />
        <p
          style={{
            display: "flex",
            fontSize: "2rem",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <MapPin color="orangered" scale={"2"} />
          Location
        </p>

        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.749652572543!2d56.57714957482646!3d24.430880162313553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8b49ea68f4e8c9%3A0xe11b51cf20723302!2sWahat%20Oman%20Industrial%20Gases%20L.L.C!5e1!3m2!1sen!2som!4v1738997255649!5m2!1sen!2som"
          width="100%"
          height="450"
          style={{ border: "0", borderRadius: "1rem" }}
          loading="lazy"
        ></iframe>
        <br />
        <p style={{ border: "" }}>
          <b style={{ color: "orangered" }}>Wahat Oman Industrial Gases LLC</b>{" "}
          Strategically located in Sohar Industrial Estate, Phase 5, Road No :
          508, Falaj Al Qabail, our facility allows us to serve clients across
          Oman with timely and efficient deliveries.
        </p>
      </div>

      <div
        style={{
          height: "",
          border: "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "",
          borderRadius: "1rem",
          padding: "1.5rem",
          paddingTop: "0",
          width: "100%",
        }}
      >
        <ContactDetails />
      </div>

      <br />
      <br />
    </div>
  );
}
