import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5o_Bt9QPBQ70Od4rtqlFWe3e3YskiybI",
  authDomain: "dbpruebita1.firebaseapp.com",
  projectId: "dbpruebita1",
  storageBucket: "dbpruebita1.appspot.com",
  messagingSenderId: "993086604257",
  appId: "1:993086604257:web:37655527b899e1100888a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };