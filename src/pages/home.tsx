import Landing from "./sections/landing";
import { motion } from "framer-motion";
import WorkWithUs from "./sections/work-with-us";
import ServicesSection from "./sections/services-section";
import ProfileSection from "./sections/profile-section";
import ClientsSection from "./sections/client-section";

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90svh",
            padding: "1rem",
          }}
        >
          <ProfileSection more />
        </div>
        <ClientsSection />
        <WorkWithUs />
      </motion.div>
    </>
  );
}
