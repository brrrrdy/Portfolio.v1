import { projects } from "../content/projects.json";
import Card from "../helpers/Card";

function ProjectsGallery({ selectedTech }) {
  // shuffle array and get random projects
  const getRandomProjects = (projectsArray, count) => {
    const shuffled = [...projectsArray].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  let displayProjects;
  let galleryTitle;

  if (selectedTech) {
    // filter projects that include the selected technology
    const filteredProjects = projects.filter((project) =>
      project.tags.includes(selectedTech)
    );
    displayProjects = getRandomProjects(filteredProjects, 4);
    galleryTitle = `Projects using ${selectedTech}`;
  } else {
    // show featured projects by default
    const featuredProjects = projects.filter(
      (project) => project.featured[0] === "y"
    );
    displayProjects = featuredProjects.slice(0, 4);
    galleryTitle = "Featured Projects";
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
