# Ejercicio 6 (Autenticación con Firebase)

## Instalación y Dependencias

```bash
# Creamos el proyecto con Vite
$ yarn create vite

# Instalamos las dependencias del proyecto
$ yarn

# Instalamos firebase
$ npm install firebase

# Instalamos router dom
$ yarn add react-router-dom
```

Creamos la conexión con firebase e importando auth en el archivo `firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const auth = getAuth();
```

<!-- pasos -->

## Pasos

1. Creamos un componente `Login` que nos permita autenticarnos con firebase.
2. Creamos un componente `Signup` que nos permita registrarnos con firebase.
