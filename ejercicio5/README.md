# Ejercicio 5

Este es un repositorio de ejemplo para practicar el uso de React y Vite y Firebase.

## Guía de Instalación

### Pasos realizados para la creación del proyecto:

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
