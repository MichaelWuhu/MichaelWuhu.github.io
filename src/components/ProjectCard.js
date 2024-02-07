import "../styles/ProjectCard.css";

import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-text">
        <div className="project-name">{props.projectName}</div>
        <div className="project-description">{props.projectDescription}</div>
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
