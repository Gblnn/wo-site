import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import BaseLayout from "./components/base-layout";
import AdminIndex from "./pages/admin-index";
import LandingEdit from "./pages/landing-edit";
import LoginPage from "./pages/login";
import ProductEdit from "./pages/product-edit";
import ClientEdit from "./pages/client-edit";

function AnimatedRoutes() {
  const location = useLocation();
  console.log("Current location:", location.pathname);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/*" index element={<BaseLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-index" element={<AdminIndex />} />
        <Route path="/edit" element={<LandingEdit />} />
        <Route path="/product-edit" element={<ProductEdit />} />
        <Route path="/client-edit" element={<ClientEdit />} />
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
