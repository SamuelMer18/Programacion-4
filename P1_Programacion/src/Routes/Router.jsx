import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Citas } from "../Pages/Citas";
import { Home } from "../Pages/Home";

export function Misrutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Citas" element={<Citas />} />
      </Routes>
    </BrowserRouter>
  );
}
