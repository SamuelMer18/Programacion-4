import { useEffect, useState } from "react";
import "./Hoo.css";
export function Hoo() {
  const [likes, setlikes] = useState(0);
  const darlike = () => {
    setlikes(likes + 1);
  };
  const dardislike = () => {
    if (likes > 0) setlikes(likes - 1);
  };
  // useEffect(dardislike);
  return (
    <div>
      <h1>Los Likes de la Pagina Son: {likes}</h1>
      <button class="button-22" onClick={darlike} variant="contained">
        Dar Like
      </button>
      <button class="button-22" onClick={dardislike} variant="contained">
        Dar DisLike
      </button>
    </div>
  );
}
