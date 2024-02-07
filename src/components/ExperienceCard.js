import "../styles/ExperienceCard.css";

import React from "react";

const ExperienceCard = (props) => {
  return (
    <div className="experience-card">
      <div className="experience-text">
        <div className="experience-name">
          <div>{props.experienceName}</div>
          <div className="experience-hyphen"> - </div>
          <div>{props.experienceRole}</div>
        </div>
        {/* <div className="experience-name">{props.experienceName}</div> */}
        {/* <div className="experience-role">{props.experienceRole}</div> */}
        <div className="experience-description">
          {props.experienceDescription}
        </div>
      </div>
      <div className="experience-image-container">
        <img
          className="experience-image"
          src={props.experienceImage}
          alt={props.experienceImageAltText}
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
