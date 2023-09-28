import "../styles/TitleArea.css";

import React from "react";

const TitleArea = (props) => {
  const title = props.title;

  return (
    <div className="Title_Area">
      <div className="Title">{title}</div>
    </div>
  );
};

export default TitleArea;
