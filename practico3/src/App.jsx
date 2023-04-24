import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MisRoutes } from "./routes/routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MisRoutes />
    </div>
  );
}

export default App;
