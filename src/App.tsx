import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/base-layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" index element={<BaseLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
