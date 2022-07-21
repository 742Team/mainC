//import { Link } from "react-router-dom";
import "../App.css";
import { useEffect } from "react";

function Card1() {
  //function handleClick(e) {
  //       e.preventDefault();
  //    }
  useEffect(() => {
    window.location.href = "d2";
  }, []);
  return (
    <div>
      <img
        src="https://media4.giphy.com/media/6utNxL2fGvEL5tFBZr/giphy.gif?cid=790b7611dee7f5df20d41158839fe7cb83e94624b8a29bc8&rid=giphy.gif&ct=g"
        alt=""
        width="800"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        onClick={(window.location.href = "d2")}
        //       onScroll={(window.location.href = "d2")}
      />
    </div>
  );
}

export default Card1;
