import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/base-layout";
import Admin from "./pages/admin";
import Login from "./pages/login";
import UserReset from "./pages/user-reset";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" index element={<BaseLayout />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-reset" element={<UserReset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
