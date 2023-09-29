import "../styles/ProjectCard.css";
import temp from "../images/temp image.png";

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
    <div className="Project-Card">
      <div className="Project-Title">Title</div>
      <p className="Project-Text">
        project info smthing smthing smthing smthing smthing smthing smthing
        smthing smthing smthing smthing smthing smthing smthing smthing smthing
        smthing smthing smthing smthing
      </p>
      <img className="Project-Image" src={temp} alt="Project Img" />
      <a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target="_blank" rel="noreferrer">
        <button className="Project-Button" type="button">
          {"BUTTON"}
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;
