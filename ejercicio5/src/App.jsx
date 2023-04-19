import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { collection, doc, query, onSnapshot } from "firebase/firestore";
import { db } from "./Data/Firebase";
import { AddTodo } from "./components/AddTodo";
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <AddTodo />
    </div>
  );
}

export default App;
