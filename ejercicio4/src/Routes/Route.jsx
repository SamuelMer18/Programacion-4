import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Pagina1 } from "../Pages/Pagina1";
import { Pagina2 } from "../Pages/Pagina2";

export function Mirutas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
