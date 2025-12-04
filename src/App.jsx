import { useState } from "react";
import "./index.css";
import Colors from "./components/Colors";
import ProjectsGallery from "./components/ProjectsGallery";
import Toolkit from "./components/Toolkit";

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedTechs, setSelectedTechs] = useState([]);

  return (
    <div className={`app app-${theme}`}>
      <div className="top-anchor" />

      <div className="theme-toggle">
        <Colors theme={theme} setTheme={setTheme} />
      </div>

      <div className="main-content">
        <h1 className="title">tom alvarez</h1>
      </div>

      <div className="Gallery">
        <ProjectsGallery selectedTechs={selectedTechs} />
      </div>

      <div className="Toolkit">
        <Toolkit
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
        />
      </div>
    </div>
  );
}

export default App;
