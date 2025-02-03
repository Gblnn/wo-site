import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Products from "@/pages/products";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { useEffect } from "react";

export default function BaseLayout() {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
