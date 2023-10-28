import React from "react";

const ExperienceCard = (props) => {
  // project_title, general_text, project_image, button_link
  // https://www.youtube.com/watch?v=dQw4w9WgXcQ

  const { experienceTitle, role="", generalText,  experienceImage, buttonLink } = props;  

  return (
    <div className="Experience-Card">
      <div className="Experience-Title">{experienceTitle}</div>
      <div className="Role">{role}</div>
      <div className="Line-Under-Role"></div>
      <p className="Experience-Text">{generalText}</p>
      <img className="Experience-Image" src={experienceTitle} alt="" />
      <a href={buttonLink} target="_blank" rel="noreferrer">
        <button className="Experience-Button" type="button">
          {"Link"}
        </button>
      </a>
    </div>
  );
};

export default ExperienceCard;
