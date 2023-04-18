import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Home() {
  const { state } = useLocation();

  return (
    <div>
      <h1>Especialidades</h1>
      <div></div>
    </div>
  );
}
