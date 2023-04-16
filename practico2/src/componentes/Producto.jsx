import "./producto.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
export function Producto() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos([
      {
        codigo: "cod1",
        descripcion: "Polera Blanca",
        unidad: 1,
        cantidad: 10,
        imagen: "./imagenes/polera.jpeg",
        catalogo: "Catálogo 1",
        estado: true,
      },
      {
        codigo: "cod2",
        descripcion: "Polera Negra",
        unidad: 1,
        cantidad: 12,
        imagen: "./imagenes/poleranegra.jpeg",
        catalogo: "Catálogo 2",
        estado: false,
      },
      {
        codigo: "cod3",
        descripcion: "Chaqueta Cafe",
        unidad: 1,
        cantidad: 4,
        imagen: "./imagenes/chaquetacafe.jpg",
        catalogo: "Catálogo 3",
        estado: true,
      },
      {
        codigo: "cod4",
        descripcion: "Polera Ploma",
        unidad: 1,
        cantidad: 7,
        imagen: "./imagenes/poleraploma.jpg",
        catalogo: "Catálogo 5",
        estado: false,
      },
      {
        codigo: "cod5",
        descripcion: "Medias Flash",
        unidad: 1,
        cantidad: 10,
        imagen: "./imagenes/mediasflash.jpg",
        catalogo: "Catálogo 1",
        estado: true,
      },
    ]);
  }, []);
  const onSubmit = (data) => {
    const producto = {
      codigo: data.codigo,
      descripcion: data.descripcion,
      unidad: data.unidad,
      cantidad: data.cantidad,
      imagen: URL.createObjectURL(data.imagen[0]),
      catalogo: data.catalogo,
      estado: data.estado,
    };

    setProductos([...productos, producto]);
    console.log(producto);
  };

  return (
    <div className="columnas">
      <div className="formulario">
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="campo">
            <label>Código</label>
            <input
              className="input"
              type="text"
              {...register("codigo", { required: true })}
            />
            {errors.codigo?.type === "required" && (
              <p className="valtext">El campo es requerido</p>
            )}
          </div>
          <div className="campo">
            <label>Descripción</label>
            <input
              className="input"
              type="text"
              {...register("descripcion", { required: true })}
            />
            {errors.descripcion?.type === "required" && (
              <p className="valtext">El campo es requerido</p>
            )}
          </div>
          <div className="campo">
            <label>Unidad</label>
            <input
              className="input"
              type="text"
              {...register("unidad", { required: true })}
            />
            {errors.unidad?.type === "required" && (
              <p className="valtext">El campo es requerido</p>
            )}
          </div>
          <div className="campo">
            <label>Cantidad</label>
            <input
              className="input"
              type="text"
              {...register("cantidad", { required: true })}
            />
            {errors.cantidad?.type === "required" && (
              <p className="valtext">El campo es requerido</p>
            )}
          </div>
          <div className="campo">
            <label>Imagen</label>
            <input
              className="im1"
              type="file"
              {...register("imagen", { required: true })}
            />
            {errors.imagen?.type === "required" && (
              <p className="valtext">Es necesario subir una imagen</p>
            )}
          </div>
          <div className="campo">
            <label>Catalogo</label>
            <input
              className="input"
              type="text"
              {...register("catalogo", { required: true })}
            />
            {errors.catalogo?.type === "required" && (
              <p className="valtext">El campo es requerido</p>
            )}
          </div>
          <div className="campo">
            <label>Estado</label>
            <select className="input" {...register("estado")}>
              <option value="true">Disponible</option>
              <option value="false">Agotado</option>
            </select>
          </div>
          <input className="button" type="submit" value="Enviar"></input>
        </form>
      </div>

      <div className="columna-listado">
        <h2>Listado de productos</h2>
        <table className="tabla">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Unidad</th>
              <th>Cantidad</th>
              <th>Imagen</th>
              <th>Catálogo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={index}>
                <td>{producto.codigo}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.unidad}</td>
                <td>{producto.cantidad}</td>
                <td>
                  <img
                    className="im2"
                    src={producto.imagen}
                    alt={`Imagen de ${producto.descripcion}`}
                  />
                </td>
                <td>{producto.catalogo}</td>
                <td>{producto.estado ? "Activo" : "Inactivo"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
