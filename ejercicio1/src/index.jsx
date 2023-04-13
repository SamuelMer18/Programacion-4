import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Usuarios } from "./componentes/Usuarios";
import { Datos } from "./componentes/Datos";
import { Estudiantes } from "./componentes/Estudiante";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Usuarios />
    <Datos nombre="Maria" apellido="Lopez" edad={25} />
    <Estudiantes nota={50} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
