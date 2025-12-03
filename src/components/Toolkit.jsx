import React from "react";
import { projects } from "../content/projects.json";

function Toolkit() {
  // Extract all unique tags from all projects
  const allTags = projects.flatMap((project) => project.tags);
  const uniqueTechnologies = [...new Set(allTags)].sort();

  return (
    <div className="toolkit-container">
      <div className="section-content">
        <h2 className="section-title">My Toolkit</h2>
        <p className="section-subtitle">
          Technologies and tools I've used across my projects
        </p>

        <div className="technologies-grid">
          {uniqueTechnologies.map((tech, index) => (
            <div key={index} className="technology-item">
              <span className="technology-name">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toolkit;
