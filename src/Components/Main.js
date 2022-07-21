import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="main">
      <Link to="/c1"></Link>
      {/* <h2>lorem..lorem..lorem..lorem..lorem..lorem..lorem..</h2>
      <p>lorem..lorem..lorem..lorem..lorem..</p> */}
      {/* <img
          src="https://media1.giphy.com/media/CKlafeh1NAxz35KTq4/giphy.gif?cid=ecf05e47lzmat0z6acyxz44c3jp2eobbkxnsx3e56atf5fq7&rid=giphy.gif&ct=g"
          alt=""
          width="800"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          //onClick={window.location.href = ''}
          //onScroll={window.location.href = ''}
        /> */}
    </div>
  );
}

export default Home;
