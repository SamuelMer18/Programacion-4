import { useEffect, useState } from "react";

import "./App.css";
import {
  collection,
  doc,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./Data/Firebase";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";
import { Titulo } from "./components/Titulo";
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
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  //comandos para Eliminar
  const Delete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="App">
      <div>
        <Titulo />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="list">
        {todos.map((todo) => (
          <Todo todo={todo} Edit={Edit} Delete={Delete} />
        ))}
      </div>
    </div>
  );
}
export default App;
