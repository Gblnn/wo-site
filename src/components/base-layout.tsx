import Home from "@/pages/home";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Navigation from "./navigation";
import Products from "@/pages/products";
import About from "@/pages/about";
import Contact from "@/pages/contact";

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
      <Navigation />
    </>
  );
}
