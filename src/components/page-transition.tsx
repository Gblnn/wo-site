import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

// Define route levels to determine slide direction
const routeLevels: Record<string, number> = {
  "/": 0,
  "/login": 1,
  "/admin-index": 2,
  "/edit": 3,
};

function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const currentLevel = routeLevels[location.pathname] || 0;
  const previousLevel = routeLevels[location.state?.from || "/"] || 0;

  // Going to deeper route = slide up from bottom
  // Going back = slide down from top
  const direction = currentLevel > previousLevel ? 1 : -1;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 * direction }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 * direction }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PageTransition;
