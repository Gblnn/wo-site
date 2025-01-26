import Landing from "./sections/landing";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <Landing />
        <div id="next" style={{ height: "100svh" }}></div>
      </motion.div>
    </>
  );
}
