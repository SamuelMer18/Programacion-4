import "./citas.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export function Citas() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [citas, setCitas] = useState([]);
  useEffect(() => {
    setCitas([
      {
        codigo: "cod1",
        especialidad: " cardiologia",
        fecha: "2023-04-18",
        paciente: "Maria Yanez",
        imagen: "./imagenes/per1.jpeg",
        sintomas: "Dolor de cabeza",
        estado: true,
      },
      {
        codigo: "cod2",
        especialidad: " Medicina General",
        fecha: "2023-04-20",
        paciente: "Juan Ortiz",
        imagen: "./imagenes/per2.jpeg",
        sintomas: " Sangrado de nariz",
        estado: true,
      },
      {
        codigo: "cod3",
        especialidad: " Medicina General",
        fecha: "2023-04-20",
        paciente: "Roberto martinez",
        imagen: "./imagenes/per3.jpeg",
        sintomas: "desmayo",
        estado: false,
      },
      {
        codigo: "cod4",
        especialidad: " Medicina General",
        fecha: "2023-04-20",
        paciente: "Matias Perez",
        imagen: "./imagenes/per4.jpeg",
        sintomas: "Alergias al polen",
        estado: false,
      },
      {
        codigo: "cod5",
        especialidad: " reumatologia",
        fecha: "2023-04-23",
        paciente: "Carlos Hernandez",
        imagen: "./imagenes/per5.jpeg",
        sintomas: "dolor de huesos",
        estado: false,
      },
    ]);
  }, []);

  const navigate = useNavigate();

  const [likes, setlikes] = useState(0);
  const darlike = () => {
    setlikes(likes + 1);
  };
  const dardislike = () => {
    if (likes > 0) setlikes(likes - 1);
  };

  function mostrarDetalle(setCitas) {
    navigate("/Citas", { state: setCitas });
  }
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  today = `${year}-0${month}-${day}`;

  function mostrarDetalle(cita) {
    navigate("/Home", { state: cita });
  }
  return (
    <div className="container">
      <div className="columnas">
        <div>
          <button class="button" onClick={darlike} variant="contained">
            Dar Like
          </button>
          <p class="button">{likes}</p>
        </div>

        <div className="columna-listado">
          <h2>Listado de Citas</h2>
          <table className="tabla">
            <thead>
              <tr>
                <th>Código</th>
                <th>Especialidad</th>
                <th>Fecha</th>
                <th>Paciente</th>
                <th>Imagen</th>
                <th>Síntomas</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita, index) => (
                <tr key={index}>
                  <td>{cita.codigo}</td>
                  <td>{cita.especialidad}</td>
                  <td className={cita.fecha != today ? "activo" : "inactivo"}>
                    {cita.fecha}
                  </td>
                  <td>{cita.paciente}</td>
                  <td>
                    <img
                      className="im2"
                      src={cita.imagen}
                      alt={`Imagen de ${cita.descripcion}`}
                      onClick={() => mostrarDetalle(cita)}
                    />
                  </td>
                  <td>{cita.sintomas}</td>
                  <td className={cita.estado ? "activo" : "inactivo"}>
                    {cita.estado ? "Disponible" : "No Disponible"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
