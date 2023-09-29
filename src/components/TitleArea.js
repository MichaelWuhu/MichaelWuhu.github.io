import "../styles/TitleArea.css";

import React from "react";

const TitleArea = (props) => {
  const title = props.title;
  const subtitle = props.subtitle;
  const profile_picture = props.profile_picture;

  return (
    <div className="Title-Area">
      <div className="Title">
        {title} <br />
        {subtitle}
      </div>
      <div className="Pfp-Border">
        <div className="Pfp-Container">
          <img className="Profile-Picture" src={profile_picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TitleArea;
