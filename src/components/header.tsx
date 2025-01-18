export default function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "6rem",
          border: "",
          background: "rgba(100 100 100/ 10%)",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            background: "rgba(100 100 100/ 20%)",
            display: "flex",
            padding: "0.25rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
            borderRadius: "0.75rem",
            marginLeft: "1rem",
            textTransform: "uppercase",
          }}
        >
          <p style={{ fontWeight: "800", fontSize: "2rem" }}>Wahat Oman</p>
        </div>
      </div>
    </>
  );
}
