import "../styles/ProjectButton.css";

import React from "react";

const ProjectButton = (props) => {

  return (
    <div className="project-button-container">
        <a className="project-button" href={props.projectLink} target='_blank' rel='noreferrer'>Link</a>
    </div>
  );
};

export default ProjectButton;
