import React from "react";

import SectionTitle from "../section-title/section-title.component";
import ProjectItem from "../project-item/project-item.component";

import "./projects.styles.scss";

function Projects() {
  return (
    <div className="projects">
      <SectionTitle>project</SectionTitle>
      <div className="projects_container">
        <ProjectItem />
      </div>
    </div>
  );
}

export default Projects;
