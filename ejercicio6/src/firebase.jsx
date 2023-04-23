import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4jTIabkSJlhlA1IPfJFMKG-yPK8udqgc",
  authDomain: "dbprueba-9841f.firebaseapp.com",
  projectId: "dbprueba-9841f",
  storageBucket: "dbprueba-9841f.appspot.com",
  messagingSenderId: "68396837222",
  appId: "1:68396837222:web:270c9552afa465b5d180a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
