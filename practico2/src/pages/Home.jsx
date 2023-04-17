import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function Home() {
  function useVisitas() {
    const [visitas, setVisitas] = useState(0);

    useEffect(() => {
      const visitasRaw = localStorage.getItem("visitas");
      const visitasParseadas = JSON.parse(visitasRaw);
      setVisitas(visitasParseadas || 0);
    }, []);

    useEffect(() => {
      setVisitas(visitas + 1);
      localStorage.setItem("visitas", visitas + 1);
    }, []);

    return visitas;
  }
  return (
    <div className="titulo">
      <header className="App-header">
        <h1>Practica 2</h1>
        <Link className="my-button" to="/Producto">
          Ir a Producto
        </Link>
        <h2>Visitas: {useVisitas()}</h2>
      </header>
    </div>
  );
}
