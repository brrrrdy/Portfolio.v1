import { useState } from "react";
import "./index.css";
import Colors from "./components/Colors";
import ProjectsGallery from "./components/ProjectsGallery";
import Toolkit from "./components/Toolkit";

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

      <div className="Gallery">
        <ProjectsGallery></ProjectsGallery>
      </div>

      <div className="Toolkit">
        <Toolkit />
      </div>
    </div>
  );
}

export default App;
