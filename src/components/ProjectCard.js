import "../styles/ProjectCard.css";

import React from "react";

const ProjectCard = (props) => {
  // project_title, general_text, project_image, button_link
  // https://www.youtube.com/watch?v=dQw4w9WgXcQ

  const { projectTitle, role, generalText, projectImage, buttonLink } = props;  

  return (
    <div className="Project-Card">
      <div className="Project-Title">{projectTitle}</div>
      <div className="Role">{role}</div>
      <div className="Line-Under-Role"></div>
      <p className="Project-Text">{generalText}</p>
      <img className="Project-Image" src={projectImage} alt="" />
      <a href={buttonLink} target="_blank" rel="noreferrer">
        <button className="Project-Button" type="button">
          {"Link"}
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;
