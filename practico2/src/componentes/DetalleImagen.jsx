export function DetalleImagen({ imagen, onClose }) {
  return (
    <div className="detalle-imagen">
      <img src={imagen} alt="Detalle de imagen" />
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}
