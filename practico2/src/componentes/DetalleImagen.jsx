import { useLocation } from "react-router-dom";
export function DetalleImagen() {
  const { state } = useLocation();

  return (
    <div className="card">
      <img src={state.imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state.descripcion}</h5>
        <p className="card-text">
          Código: {state.codigo} <br />
          Unidad: {state.unidad} <br />
          Cantidad: {state.cantidad} <br />
          Catalogo: {state.catalogo} <br />
          Estado: {state.estado ? "Disponible" : "No Disponible"} <br />
        </p>
      </div>
    </div>
  );
}
