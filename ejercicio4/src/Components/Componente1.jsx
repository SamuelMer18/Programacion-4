const datos = [
  { nombre: "Carlos", apellido: "Perez" },
  { nombre: "Juan", apellido: "Gomez" },
  { nombre: "Maria", apellido: "Gomez" },
  { nombre: "Pedro", apellido: "Perez" },
  { nombre: "Carlos", apellido: "Perez" },
];
export function Componente1() {
  return (
    <div>
      <h1>Componente1</h1>
      <div>
        {datos.map((item) => {
          return (
            <p>
              {item.nombre} {item.apellido}
            </p>
          );
        })}
      </div>
    </div>
  );
}
