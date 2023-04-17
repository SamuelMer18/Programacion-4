import { Link } from "react-router-dom";
import { Componente1 } from "../Components/Componente1";
export function Pagina2() {
  return (
    <div>
      <h1>Pagina2</h1>

      <Link to="/">Ir a Pagina1</Link>
      <Componente1 />
    </div>
  );
}
