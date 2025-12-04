import React from "react";
import { projects } from "../content/projects.json";

function Toolkit({ selectedTechs, setSelectedTechs }) {
  // Extract all unique tags from all projects
  const allTags = projects.flatMap((project) => project.tags);
  const uniqueTechnologies = [...new Set(allTags)].sort();

  const handleTechClick = (tech) => {
    // If tech is already selected, remove it
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter((t) => t !== tech));
    } else {
      // Add tech to selected array
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  return (
    <div className="toolkit-container">
      <div className="section-content">
        <h2 className="section-title">my toolkit</h2>
        <p className="section-subtitle">
          the technologies that I use every day in my work.
        </p>

        <div className="technologies-grid">
          {uniqueTechnologies.map((tech, index) => (
            <div
              key={index}
              className={`technology-item ${
                selectedTechs.includes(tech) ? "selected" : ""
              }`}
              onClick={() => handleTechClick(tech)}
            >
              <span className="technology-name">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toolkit;
