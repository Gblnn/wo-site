import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Products from "@/pages/products";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

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
