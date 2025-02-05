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
      <h1>Test</h1>
      <div
        className="main-page"
        data-testid="main-div"
        style={{ backgroundColor: toggleMode }}
      >
        <button onClick={toggleModeHandler}>Toggle Mode</button>
      </div>
    </div>
  );
}

export default App;
