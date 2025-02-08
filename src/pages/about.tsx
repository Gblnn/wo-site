import ProfileSection from "./sections/profile-section";

export default function About() {
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
      <div style={{ padding: "2.5rem" }}>
        <div
          style={{
            borderRadius: "1rem",
            height: "32ch",
            width: "100%",
            objectFit: "cover",
            background: "url('/cleaned_plant_int.jpg')",
            backgroundColor: "rgba(255 69 0/ 20%)",
            backgroundBlendMode: "hard-light",
            backgroundPosition: "-5px -100px",
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
            About Us
          </h1>
        </div>

        <br />
        <br />
        <p>
          <b style={{ color: "orangered" }}>Wahat Oman Industrial Gases LLC</b>{" "}
          is a leading provider of high quality industrial gases in the
          Sultanate of Oman. Established with a commitment to provide essential
          industrial gases to the infrastructures that need it. We specialize in
          manufacturing and supplying a wide range of gases to support various
          industries, including manufacturing, construction, healthcare and
          more. Our state of the art facilities ensure that all our products
          meet the highest safety and quality standards, providing our customers
          with reliable and efficient solutions for gas-related needs.
        </p>
      </div>

      <div
        style={{
          height: "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "",
          borderRadius: "1rem",
          padding: "1rem",
        }}
      >
        <ProfileSection />
      </div>

      <br />
      <br />
    </div>
  );
}
