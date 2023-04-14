import { Link } from "react-router-dom";

export function Pagina1() {
  return (
    <div>
      <h1>Esta es la Pagina 1</h1>
      <img src="https://www.shutterstock.com/image-photo/hands-holding-spanish-word-bienvenido-260nw-137187227.jpg"></img>
      <Link to="/pagina2">Ir a la Pagina 2</Link>
    </div>
  );
}
