import { motion } from "framer-motion";

interface Props {
  img?: string;
  icon?: React.ReactNode;
  title: string;
  desc?: string;
  centered?: boolean;
  onClick?: () => void;
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
          background: "rgba(100 100 100/ 10%)",
          boxShadow: "1px 1px 10px rgba(0 0 0/ 50%)",
          width: "320px",
          height: "320px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "220px",
            background: "none",
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: props.centered ? "center" : "flex-end",
            color: "crimson",
            overflow: "hidden",
          }}
        >
          {props.img ? (
            <img
              src={props.img}
              alt={props.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            props.icon
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
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
          style={{
            padding: "0.5rem",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          {props.title}
        </div>
      </div>
    </motion.div>
  );
}
