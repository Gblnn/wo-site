import { motion } from "framer-motion";

interface Props {
  img?: string;
  icon?: any;
  title?: string;
  desc?: string;
  onClick?: any;
  centered?: boolean;
}

export default function ServiceBox(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0 }}
    >
      <div
        onClick={props.onClick}
        className=""
        style={{
          border: "3px solid rgba(100 100 100/ 20%)",
          borderRadius: "50%",
          display: "flex",
          flexFlow: "column",
          padding: "0.5rem",
          background: "rgba(20 20 20/ 40%)",
          boxShadow: "1px 1px 10px rgba(0 0 0/ 50%)",
          width: "32ch",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "21ch",
            background: "none",
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: props.centered ? "center" : "flex-end",
            color: "crimson",
          }}
        >
          {props.icon}
        </div>

        <div style={{ display: "flex", border: "", justifyContent: "center" }}>
          <hr
            style={{
              boxShadow: "1px 1px 10px black",
              border: "none",
              height: "0.25rem",
              width: "90%",
              background: "linear-gradient(90deg, brown, orange, brown)",
            }}
          />
        </div>

        <div
          className="project-label"
          style={{
            border: "",
            borderBottomRightRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            color: "white",
            background: "",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            id="body"
            style={{
              margin: "1.5rem",
              display: "flex",
              flexFlow: "column",
              gap: "0.5rem",
              border: "",
              height: "2.5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.15rem",
                fontWeight: "600",
                display: "flex",
                gap: "0.5rem",
                textShadow: "1px 1px 20px black",
              }}
            >
              {props.title}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                opacity: 0.65,
                letterSpacing: "0.05rem",
                display: "flex",
                border: "",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
