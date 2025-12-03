import { useState } from "react";
import "./index.css";
import Colors from "./components/Colors";
import ProjectGallery from "./components/StatePractice";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app app-${theme}`}>
      <div className="top-anchor" />

      <div className="theme-toggle">
        <Colors theme={theme} setTheme={setTheme} />
      </div>

      <div className="main-content">
        <h1 className="title">Portfolio Coming Soon</h1>
      </div>
      <div className="Gallery"></div>
    </div>
  );
}

export default App;
