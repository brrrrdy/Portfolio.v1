import { projectImages } from "../assets/images/projectImages";

function Card({ project }) {
  // Get the imported image for this project
  const projectImage = projectImages[project.id];

  return (
    <div className="card">
      {projectImage ? (
        <img src={projectImage} alt={project.title} />
      ) : (
        <div className="image-placeholder">
          <span>No Image Available</span>
        </div>
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
