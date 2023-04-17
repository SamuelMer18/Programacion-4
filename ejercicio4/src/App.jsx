import { useState } from "react";
import "./App.css";
import { Mirutas } from "./Routes/Route";

function App() {
  const [count, setCount] = useState(0);

  return <Mirutas />;
}

export default App;
