import { Link } from "react-router-dom";
import { auth } from "../../Data/firebase";
function salir() {
  return auth.signOut();
  navigate("/");
}
export function Home(props) {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <h1>
            <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/signup">Registrar</Link>
          </h1>
        </div>
      </div>
      <h2>{props.name ? `Bienvenido - ${props.name}` : "Inicie sesión"}</h2>
      <button onClick={salir}>Salir</button>
    </div>
  );
}
