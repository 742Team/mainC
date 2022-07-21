//import { Link } from "react-router-dom";
//import { useState } from "react";
import "../App.css";

function Card5() {
  // const [gif, setGif] = useState();

  return (
    <div>
      <img
        src="https://giphy.com/gifs/lightning-strike-CKlafeh1NAxz35KTq4?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=https://giphy.com/"
        alt=""
        width="800"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        onClick={(window.location.href = "main")}
        onScroll={(window.location.href = "main")}
      />
    </div>
  );
}

export default Card5;
