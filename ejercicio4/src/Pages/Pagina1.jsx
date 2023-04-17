import { Link } from "react-router-dom";
export function Pagina1() {
  return (
    <div>
      <h1>Pagina1</h1>
      <Link to="/pagina2">Pagina 2</Link>
    </div>
  );
}
