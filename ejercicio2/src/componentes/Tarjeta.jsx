import "./tarjeta.css";
export function Tarjeta({ estado }) {
  return (
    <div className="card">
      <h1>Mi Tarjeta</h1>
      <h1 className={estado ? "on" : "off"}></h1>
    </div>
  );
}
