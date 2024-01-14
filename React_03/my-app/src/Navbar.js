import React from "react";
import reactLogo from "./react-logo.png";

function Navbar() {
  return (
    <div>
        <nav>
          <img src={reactLogo} alt="React Logo" className="nav-icon" />
          <h1>React Facts</h1>
        </nav>
      
    </div>
  );
}

export default Navbar;
