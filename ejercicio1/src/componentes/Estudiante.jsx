export function Estudiantes(props) {
  const estudiante = {
    nombre: "Juan",
    apellido: "Perez",
    materia: "Matematicas",
  };
  return (
    <div>
      <h3>{estudiante.nombre}</h3>
      <h3>{estudiante.apellido}</h3>
      <h3>{estudiante.materia}</h3>
      <h3>{props.nota}</h3>
      <h3>{props.nota > 50 ? "Aprobado" : "Reprobado"}</h3>
    </div>
  );
}
