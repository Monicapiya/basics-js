import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const page = (
  <div>
    <h1>My awesome website is React</h1>
    <h3>Reason i love React</h3>
    <ol>
      <li>It is composable</li>
      <li>It is declarative</li>
      <li>It is a hirable skill</li>
      <li>It is actively maintained by skilled people</li>
    </ol>
  </div>
);

ReactDOM.render(page, document.getElementById("root"))


