import { useState } from "react";
import { projects } from "../content/projects.json";

export default function ProjectGallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let project = projects[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{project.title} </i>
        by {project.id}
      </h2>
      <h3>
        ({index + 1} of {projects.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{project.description}</p>}
      <img src={project.HTMLlink} alt={project.featured} />
    </>
  );
}
