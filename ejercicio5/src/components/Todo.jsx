import { useState } from "react";

export function Todo({ todo, Edit, Delete }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const Cambio = (e) => {
    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div>
      <div>
        <input
          style={{ textDecoration: todo.completed && "line-through" }}
          value={todo.title === "" ? newTitle : todo.title}
          onChange={Cambio}
        />

        <button onClick={() => Edit(todo, newTitle)}>Editar</button>

        <button onClick={() => Delete(todo.id)}>eliminar</button>
      </div>
    </div>
  );
}
