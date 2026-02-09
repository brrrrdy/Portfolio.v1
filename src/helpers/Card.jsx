import { useEffect, useRef, useState } from "react";
import { projectImages } from "../assets/images/projectImages";

function Card({ project }) {
  const [isInFocus, setIsInFocus] = useState(false);
  const cardRef = useRef(null);

  // Get the imported image for this project
  const projectImage = projectImages[project.id];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Card is in focus when it's intersecting
          setIsInFocus(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Card is focused when 50% visible
        rootMargin: "-20% 0px -20% 0px", // Focus area is center 60% of viewport
      },
    );

    const currentCard = cardRef.current;

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  return (
    <div className={`card ${isInFocus ? "in-focus" : ""}`} ref={cardRef}>
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
