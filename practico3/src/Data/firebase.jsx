// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV29ONWCLAs07eEYwJlTHfifgwL3X4Nhs",
  authDomain: "practica3-c82e0.firebaseapp.com",
  projectId: "practica3-c82e0",
  storageBucket: "practica3-c82e0.appspot.com",
  messagingSenderId: "1052263233636",
  appId: "1:1052263233636:web:fa70c5b7c5d1b9af520771",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
