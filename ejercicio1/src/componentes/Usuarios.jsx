export function Usuarios() {
  const registro = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    altura: 1.75,
  };
  return (
    <div>
      <h3>{registro.nombre}</h3>
      <h3>{registro.apellido}</h3>
      <h3>{registro.edad}</h3>
    </div>
  );
}
