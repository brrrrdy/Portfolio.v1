import { projects } from "../content/projects.json";
import Card from "../helpers/Card";

function ProjectsGallery({ selectedTechs }) {
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
      selectedTechs.every((tech) => project.tags.includes(tech))
    );
    displayProjects = getRandomProjects(filteredProjects, 4);

    if (selectedTechs.length === 1) {
      galleryTitle = `Projects using ${selectedTechs[0]}`;
    } else {
      galleryTitle = `Projects using ${selectedTechs.join(" + ")}`;
    }
  } else {
    // show featured projects by default

    const featuredProjects = projects.filter(
      (project) => project.featured[0] === "y"
    );
    displayProjects = featuredProjects.slice(0, 4);
    galleryTitle = "featured projects";
  }

  return (
    <div className="projects-gallery">
      <h2>{galleryTitle}</h2>
      <p>
        {displayProjects.length} project
        {displayProjects.length !== 1 ? "s" : ""} found
      </p>
      <div className="gallery-grid">
        {displayProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGallery;
