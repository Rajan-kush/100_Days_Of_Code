import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="React-logo" />
        <h2>React Facts</h2>
      </div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprises apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
