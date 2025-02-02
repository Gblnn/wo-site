import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Products from "@/pages/products";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function BaseLayout() {
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
