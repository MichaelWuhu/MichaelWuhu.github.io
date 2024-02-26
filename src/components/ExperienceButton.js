import "../styles/ExperienceButton.css";

import React from "react";

const ExperienceButton = (props) => {

  return (
    <div className="experience-button-container">
        <a className="experience-button" href={props.experienceLink} target='_blank' rel='noreferrer'>Link</a>
    </div>
  );
};

export default ExperienceButton;
