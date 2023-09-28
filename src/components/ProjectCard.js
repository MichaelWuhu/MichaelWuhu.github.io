import "../styles/ProjectCard.css";

import React from "react";

const ProjectCard = (props) => {

    const project_title = props.projectTitle;
    const general_text = props.generalText;
    const bullet_points = props.bulletPoints;
    const project_image = props.projectImage;
    const image_alt_text = props.imageAltText;
    const button_link = props.buttonLink;
    const button_text = props.buttonText;

  return (
    <div className="Project_Card">
      <div></div>
      SOMETHING
      <></>
    </div>
  );
};

export default ProjectCard;
