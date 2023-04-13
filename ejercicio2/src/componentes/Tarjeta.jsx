import "./tarjeta.css";
export function Tarjeta({ estado }) {
  return (
    <div className="card">
      <h1 className={estado ? "on" : "off"}>Mi Tarjeta</h1>
    </div>
  );
}
