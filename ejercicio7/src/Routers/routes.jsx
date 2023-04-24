import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { ProductosConfig } from "../Pages/ProductosConfig";
export function MisRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductosConfig />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
