export function Curso({ curso, Edit, Delete }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <a
        href=""
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="1.jpeg"
            alt=""
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            {curso.estado == "True" ? "Activo" : "Inactivo"}
          </span>
          <h2 className="mt-2 mb-2  font-bold">{curso.codigo}</h2>
          <p className="text-sm">{curso.descripcion}</p>
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold">Fecha:</span>&nbsp;
            <span className="text-sm font-semibold">{curso.fecha}</span>&nbsp;
            <span className="text-sm font-semibold"></span>
          </div>
          <span className="font-bold text-xl">{curso.precio}</span>&nbsp;
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-1">
            <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
            {curso.aula}
          </span>
          <span className="flex items-center">
            <span className="far fa-address-card fa-fw text-gray-900 mr-2"></span>{" "}
            {curso.duracion}
            <button
              onClick={() => Edit(curso, newTitle)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Editar
            </button>
            <button
              onClick={() => Delete(curso.id)}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Eliminar
            </button>
          </span>
        </div>
      </a>
    </div>
  );
}
