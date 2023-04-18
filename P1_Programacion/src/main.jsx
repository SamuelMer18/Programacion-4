import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Encabezado } from "./Components/Encabezado";
import { Pie } from "./Components/Pie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Encabezado />
    <App />
    <Pie />
  </React.StrictMode>
);
