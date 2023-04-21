import { useState } from "react";

import "./App.css";
import { MisRoutes } from "./routes/routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MisRoutes />
    </div>
  );
}

export default App;
