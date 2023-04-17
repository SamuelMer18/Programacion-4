import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="titulo">
      <header className="App-header">
        <h1>Practica 2</h1>
        <Link className="my-button" to="/Producto">
          Ir a Producto
        </Link>
      </header>
      {/* <img src="https://www.shutterstock.com/image-photo/hands-holding-spanish-word-bienvenido-260nw-137187227.jpg"></img> */}
    </div>
  );
}
