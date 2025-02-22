import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BaseLayout from "./components/base-layout";
import LoginPage from "./pages/login";
import AdminIndex from "./pages/admin-index";
import LandingEdit from "./pages/landing-edit";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/*" index element={<BaseLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-index" element={<AdminIndex />} />
        <Route path="/edit" element={<LandingEdit />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
