import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  //   function handleClick(e) {
  //       e.preventDefault();
  //    }
  return (
    <div>
      <header
        style={{ background: "black", height: "40px" }}
        className="top-header-nav"
      >
        <nav>
          {/* <Link to="/Main">
            <button></button>
          </Link> */}
          <div>
            <Link to="/main">
              <h1 className="headerNav">742</h1>
            </Link>

            {/* <a href="https://startling-haupia-b8d320.netlify.app/">Tv UI</a> */}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
