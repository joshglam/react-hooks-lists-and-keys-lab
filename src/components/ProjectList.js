import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectsMap = projects.map((project) => {
    return <ProjectItem name={project.name} key={project.id} technologies={project.technologies} about={project.about} />
    }
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsMap}</div>
    </div>
  );
}

export default ProjectList;
