import "../styles/ProjectCard.css";

import React from "react";
import ProjectButton from "./ProjectButton";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-text">
        <div className="project-name">{props.projectName}</div>
        <div className="project-description">{props.projectDescription}</div>
        <ProjectButton projectLink={props.projectLink}/>
      </div>
      <div className="project-image-container">
        <img
          className="project-image"
          src={props.projectImage}
          alt={props.projectImageAltText}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
