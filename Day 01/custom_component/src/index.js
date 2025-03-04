import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RectFacts />);

function RectFacts() {
  return (
    <main>
      <main>
        <div className="Nav">
          <img src={logo} alt="Reat-logo" />
          <h2>React Pros</h2>
        </div>
        <h1>Why I should learn React</h1>
        <ul>
          <li>A popular JavaScript Library</li>
          <li>Relatively easy learning curve</li>
          <li>
            Provide component based architecture, which improves code
            reusability
          </li>
          <li>High demand in job market</li>
        </ul>
      </main>
    </main>
  );
}
