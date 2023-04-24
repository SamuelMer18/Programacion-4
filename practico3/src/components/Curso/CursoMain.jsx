import { db } from "../../Data/firebase";
import {
  collection,
  doc,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { Curso } from "./Curso";
export function CursoMain() {
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "cursos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let cursosArray = [];
      querySnapshot.forEach((doc) => {
        cursosArray.push({ ...doc.data(), id: doc.id });
      });
      setCursos(cursosArray);
    });
    return () => unsubscribe();
  }, []);

  const Edit = async (curso, codigo) => {
    await updateDoc(doc(db, "cursos", curso.id), { codigo: codigo });
  };
  const Delete = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, "cursos", id));
  };

  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cursos</h1>
        <a
          href="curso/addcurso"
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          Añadir Curso
        </a>
        <div className="flex flex-wrap -mx-4">
          {cursos.map((curso) => (
            <Curso curso={curso} Edit={Edit} Delete={Delete} />
          ))}
        </div>
      </div>
    </div>
  );
}
