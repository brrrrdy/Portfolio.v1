import { projects } from "../content/projects.json";
import Card from "../helpers/Card.jsx";

function ProjectsGallery() {
  const featuredProjects = projects
    .filter((project) => project.featured[0] === "y")
    .slice(0, 4);

  return (
    <div className="projects-gallery">
      <h2>My Projects</h2>
      <div className="gallery-grid">
        {featuredProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGallery;
