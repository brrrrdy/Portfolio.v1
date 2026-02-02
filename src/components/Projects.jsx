import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../content/projects.json";
import Card from "../helpers/Card";
import Toolkit from "./Toolkit";

function Projects() {
  const [selectedTechs, setSelectedTechs] = useState([]);

  // shuffle array and get random projects
  const getRandomProjects = (projectsArray, count) => {
    const shuffled = [...projectsArray].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  let displayProjects;
  let galleryTitle;

  if (selectedTechs && selectedTechs.length > 0) {
    // filter projects that include all selected techs
    const filteredProjects = projects.filter((project) =>
      selectedTechs.every((tech) => project.tags.includes(tech)),
    );
    displayProjects = getRandomProjects(filteredProjects, 4);
    if (selectedTechs.length === 1) {
      galleryTitle = `my projects that use ${selectedTechs[0]}`;
    } else {
      galleryTitle = `my projects that use ${selectedTechs.join(", ")}`;
    }
  } else {
    // show featured projects by default
    const featuredProjects = projects.filter(
      (project) => project.featured[0] === "y",
    );
    displayProjects = featuredProjects.slice(0, 4);
    galleryTitle = "my projects";
  }

  return (
    <>
      <div className="projects-gallery">
        <div className="section-container">
          <h2>{galleryTitle}</h2>
          <div className="section-content-wrapper">
            <div className="gallery-grid">
              {displayProjects.map((project) => (
                <Card key={project.id} project={project} />
              ))}
            </div>
            <div className="see-more-container">
              <Link to="/projects" className="btn-primary">
                see all my projects
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Toolkit" id="toolkit">
        <Toolkit
          selectedTechs={selectedTechs}
          setSelectedTechs={setSelectedTechs}
        />
      </div>
    </>
  );
}

export default Projects;
