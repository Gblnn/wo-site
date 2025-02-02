import Landing from "./sections/landing";
import { motion } from "framer-motion";
import WorkWithUs from "./sections/work-with-us";
import ServicesSection from "./sections/services-section";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <Landing />
        <ServicesSection />

        <WorkWithUs />
      </motion.div>
    </>
  );
}
