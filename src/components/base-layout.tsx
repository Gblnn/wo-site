import Home from "@/pages/home";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Navigation from "./navigation";
import Products from "@/pages/products";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Navigation />
    </>
  );
}
