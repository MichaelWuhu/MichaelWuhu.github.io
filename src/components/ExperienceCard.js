import "../styles/ExperienceCard.css";

import React from "react";

const ExperienceCard = (props) => {
  // project_title, general_text, project_image, button_link
  // https://www.youtube.com/watch?v=dQw4w9WgXcQ

  const { experienceTitle, role="", generalText,  experienceImage } = props;  

  return (
    <div className="Experience-Card">
      <div className="Experience-Info">
      <div className="Experience-Title">{experienceTitle}</div>
      <div className="Experience-Role">{role}</div>
      <div className="Line-Under-Role"></div>
      <p className="Experience-Text">{generalText}</p>
      </div>
      <img className="Experience-Image" src={experienceImage} alt="" />
    </div>
  );
};

export default ExperienceCard;
