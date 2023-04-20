import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  collection,
  doc,
  query,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "./Data/Firebase";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";
function App() {
  const [todos, setTodos] = useState([]);
  //comandos para leer
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsubscribe();
  }, []);
  //comandos para Editar
  const Edit = async (todo, title) => {
    await updateDoc(doc(bd, "todos", todo.id), { title: title });
  };
  //comandos para Eliminar
  const Eliminar = async (todo) => {
    await deleteDoc(db, "todos", id);
  };
  return (
    <div className="App">
      <div>
        <AddTodo />
      </div>
      <div>
        {todos.map((todo) => {
          <Todo todo={todo} Editar={Edit} Eliminar={Eliminar} />;
        })}
      </div>
    </div>
  );
}

export default App;
