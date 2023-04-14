import { Link } from "react-router-dom";

export function Pagina2() {
  return (
    <div>
      <h1>Estamos en la Pagina 2</h1>
      <img src="https://www.shutterstock.com/image-vector/bienvenido-welcome-spanish-text-lettering-260nw-1050015260.jpg"></img>

      <Link to="/">Ir a la Pagina 1</Link>
    </div>
  );
}
