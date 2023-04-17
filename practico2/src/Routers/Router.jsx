import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Producto } from "../componentes/Producto";
import { DetalleImagen } from "../componentes/DetalleImagen";
import { Home } from "../pages/Home";
export function Misrutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Producto" element={<Producto />} />
        <Route path="/detalleImagen" element={<DetalleImagen />} />
      </Routes>
    </BrowserRouter>
  );
}
