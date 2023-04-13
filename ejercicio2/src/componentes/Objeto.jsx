import "./tarjeta.css";
import imagen1 from "../imagenes/ironman.webp";
import imagen2 from "../imagenes/spiderman.jpg";

const datos = [
  { nombre: "Iron Man", fecha: "13/02/23", imagen: imagen2 },
  {
    nombre: "Spider Man",
    fecha: "13/02/23",
    imagen: imagen1,
  },
];
export function Objeto() {
  return datos.map((item) => {
    return (
      <div>
        <h3>{item.nombre}</h3>
        <h3>{item.fecha}</h3>
        <img className="imgtar" src={item.imagen} alt={item.nombre} />
      </div>
    );
  });
}
