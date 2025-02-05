//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [toggleMode, setToggleMode] = useState("grey");
  const toggleModeHandler = () => {
    setToggleMode((prevToggleMode) =>
      prevToggleMode === "grey" ? "black" : "grey"
    );
  };

  return (
    <div className="main-page-container">
      <div
        className="main-page"
        data-testid="main-div"
        style={{ backgroundColor: toggleMode }}
      >
        <h1>CI/CD Test</h1>
        <button onClick={toggleModeHandler}>Toggle Mode</button>
      </div>
    </div>
  );
}

export default App;
