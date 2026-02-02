import { useEffect } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import projectsData from "../content/projects.json";
import projectsCopyData from "../content/projectsCopy.json";
import "../styles/allprojects.css";
import githubIcon from "../assets/images/github-original.svg?url";

export default function AllProjects() {
  const { projects } = projectsData;
  const { projectsCopy } = projectsCopyData;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="app">
      <TopNav />
      <section id="all-projects">
        <div className="projects-container">
          <h1>all projects</h1>
          <div className="intro-box">{projectsCopy}</div>
          <div className="projects-table-wrapper">
            <table className="projects-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Tags</th>
                  <th>Year</th>
                  <th>GitHub Repo</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>
                      <a
                        href={project.ghPage[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-title-link"
                      >
                        {project.title}
                      </a>
                    </td>
                    <td className="description-cell">{project.description}</td>
                    <td>
                      <div className="tags-container">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="year-cell">{project.year}</td>

                    <td>
                      <a
                        href={project.HTMLlink[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-page-link"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <img
                          src={githubIcon}
                          alt="GitHub"
                          className="github-icon"
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
