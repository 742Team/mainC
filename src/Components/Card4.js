//import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";
import { useEffect } from "react";
import "../App.css";

function Card4() {
  // const [gif, setGif] = useState();

  useEffect(() => {
    window.location.href = "main";
  }, []);
  return (
    <div>
      <img
        src="https://64.media.tumblr.com/5628c5f935ea3d86254809fbe5087d66/tumblr_p2ph6l6xaF1qeyvpto1_500.gifv"
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

export default Card4;
