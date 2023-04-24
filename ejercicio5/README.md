# Ejercicio 5

Este es un repositorio de ejemplo para practicar el uso de React, Vite y Firebase.

Se implementaron funciones para leer desde Firestore, editar un dato y eliminar un dato. 

## Pasos Realizados:
 **Commits:**
- [Conexion a Firebase,Formulario insertar dato](https://github.com/SamuelMer18/Programacion-4/commit/818264a8a6825d41481267990a306f9adadbf0cb#commitcomment-109897787)
- [Leer Datos, Funcion Editar, Funcion Eliminar](https://github.com/SamuelMer18/Programacion-4/commit/642d1126110ac96f33b47cccf1af3b808e42cd4d#commitcomment-109858292)
- [Botones Editar, Eliminar y la funcionalidad asociada en el componente "Todo".](https://github.com/SamuelMer18/Programacion-4/commit/957c4fdb9b81c384e897ff43e6666a8579070e3d#commitcomment-109896784)
## Guía de Instalación

## Pasos realizados para la creación del proyecto:

Creacion de proyecto con Vite usando Yarn:

```bash
yarn create vite
yarn
yarn dev
```

Creacion de proyecto con Vite usando NPM:

```bash
npm create vite
npm install
npm run dev
```

### Agrega el SDK de Firebase

Instalar el SDK de Firebase para tu proyecto web:

```bash
npm install firebase
```
## Continuar con la configuracion de Firebase en la consola de Firebase.
### Creamos un Nuevo Proyecto en Firebase
<img src="https://raw.githubusercontent.com/SamuelMer18/Programacion-4/main/assets1/proyecreate2.png" ></img>
### Agregamos una App Web
<img src="https://raw.githubusercontent.com/SamuelMer18/Programacion-4/main/assets1/proyecreate3.png" ></img>
### Creamos una Base de Datos
<img src="https://raw.githubusercontent.com/SamuelMer18/Programacion-4/main/assets1/proyecreate4.png" ></img>

### Agrega Firebase a tu proyecto web

Inicializa Firebase y comienza a usar los SDK:

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Informacion individual de cada proyecto
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```
