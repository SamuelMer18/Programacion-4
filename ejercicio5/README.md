# Ejercicio 5

Este es un repositorio de ejemplo para practicar el uso de React, Vite y Firebase.

Se implementaron funciones para leer todos desde Firestore, editar un dato y eliminar un dato. 
## Leer Datos
Para leer todos, se utilizó el hook useEffect para suscribirse a los cambios en la colección "todos" de Firestore mediante  query y onSnapshot. La suscripción se maneja para que no haya memoria de fuga. 
##  Función Editar
La función Edit permite editar el título de un todo actualizando su documento en Firestore. Recibe como parámetros el todo a editar y el nuevo título. 
## Función Eliminar
La función Eliminar elimina un todo de Firestore mediante deleteDoc. Recibe el id del todo a eliminar.

 Estas funciones CRUD permiten mantener sincronizada la lista de todos entre la base de datos y el estado local de la aplicación, persistiendo el progreso entre sesiones. "

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

### Agrega Firebase a tu proyecto web

Agrega Firebase a tu proyecto web:

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

Continuar con la configuracion de Firebase en la consola de Firebase.
