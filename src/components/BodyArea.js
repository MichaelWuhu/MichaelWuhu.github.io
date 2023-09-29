import "../styles/BodyArea.css";

import ProjectCard from "../components/ProjectCard";

import React from "react";

const BodyArea = (props) => {
  return (
    <div className="Body">
      <div className="Projects-Section-Title">Projects</div>
      <div className="Projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default BodyArea;
