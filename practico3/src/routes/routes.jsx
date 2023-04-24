import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import { Signup } from "../components/Signup/Signup";
import { auth } from "../Data/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { CursoMain } from "../components/Curso/CursoMain";
import { AddCurso } from "../components/Curso/AddCurso";
export function MisRoutes() {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home name={userName} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/curso" element={<CursoMain />} />
        <Route exact path="/curso/addcurso" element={<AddCurso />} />
      </Routes>
    </Router>
  );
}
