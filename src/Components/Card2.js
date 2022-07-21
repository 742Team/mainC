//import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";

function Card2() {
  useEffect(() => {
    window.location.href = "d4";
  }, []);
  return (
    <div>
      <img
        src="https://media1.giphy.com/media/l0MYIKGlXPrn0Z4uQ/giphy.gif?cid=790b7611e4580e0fadf7fb081165199bab38a3db2bff93b6&rid=giphy.gif&ct=g"
        alt=""
        width="800"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        onClick={(window.location.href = "d4")}
      />
    </div>
  );
}

export default Card2;
