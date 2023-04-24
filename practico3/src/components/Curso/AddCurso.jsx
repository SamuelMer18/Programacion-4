import { Link } from "react-router-dom";
import { db } from "../../Data/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
export function AddCurso() {
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [aula, setAula] = useState("");
  const [duracion, setDuracion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [estado, setEstado] = useState("True");

  const [mensaje, setMensaje] = useState("");
  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };
  const insertar = async (e) => {
    e.preventDefault();
    const curso = {
      codigo: codigo,
      descripcion: descripcion,
      fecha: fecha,
      aula: aula,
      duracion: duracion,
      precio: precio,
      imagen: imagen,
      estado: estado,
    };
    try {
      const docRef = await addDoc(collection(db, "cursos"), curso);
      console.log("Document written with ID: ", docRef.id);
      setMensaje("¡El curso se ha registrado con éxito!");
    } catch (e) {
      console.error("Error adding document: ", e);
      setMensaje("¡El curso no se pudo registrar"); // Actualiza el mensaje de éxito
    }
  };

  return (
    <section className="bg-gray-300 dark:bg-gray-900">
      <div className=" w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 flex flex-col  items-center justify-center px-6 py- mx-auto ">
        <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-20 h-20 mr-2" src="/curso.png" alt="logo" />
        </a>
        {mensaje && (
          <div
            class="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
            role="alert"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">{mensaje}</span>
            </div>
          </div>
        )}
        <form onSubmit={insertar}>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Registrar Curso
              </h1>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Código
                </label>
                <input
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
                  Descripción
                </label>
                <input
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  className="bg-gray-50 p-7 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Fecha
                </label>
                <input
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ingrese la fecha"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Aula
                </label>
                <input
                  value={aula}
                  onChange={(e) => setAula(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Duración
                </label>
                <input
                  value={duracion}
                  onChange={(e) => setDuracion(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Precio
                </label>
                <input
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Imagen
                </label>
                <input
                  value={imagen}
                  onChange={(e) => setImagen(e.target.value)}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Estado
                </label>
                <select
                  value={estado}
                  onChange={handleEstadoChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="True">Vigente</option>
                  <option value="False">No Vigente</option>
                </select>
              </div>

              <button
                onClick={insertar}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
