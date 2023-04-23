// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
export const db = getFirestore(app);
