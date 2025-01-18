import Home from "@/pages/home";
import { Route, Routes } from "react-router-dom";
import Header from "./header";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
