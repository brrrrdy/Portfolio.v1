import { useState } from "react";
import "./index.css";
import Colors from "./components/Colors";

function App() {
  const [theme, setTheme] = useState("light");

  console.log("Current theme:", theme); // Debug log

  return (
    <div
      className={`app ${theme}`}
      style={{ backgroundColor: theme === "light" ? "white" : "#1e3a8a" }}
    >
      <div className="top-anchor" />

      <div className="theme-toggle">
        <Colors theme={theme} setTheme={setTheme} />
      </div>

      <div className="main-content">
        <h1 className="title">Portfolio Coming Soon</h1>
        <p>Current theme: {theme}</p>
      </div>
    </div>
  );
}

export default App;
