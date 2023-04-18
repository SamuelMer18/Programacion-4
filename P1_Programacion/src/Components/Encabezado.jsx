import "./encabezado.css";
export function Encabezado() {
  return (
    <div className="header">
      <a href="#default" className="logo">
        Prueba Practica 1
      </a>
      <div className="header-right">
        <a className="active" href="/">
          Home
        </a>
        <a className="active" href="/Citas">
          Citas
        </a>
      </div>
    </div>
  );
}
