import "../styles/BodyArea.css";

import ProjectCard from "../components/ProjectCard";

import sprocketStats from "../images/sprocket stats.png";
import anagramsSolver from "../images/anagrams solver.png";
import personalWebsite from "../images/personal website.png";

import React from "react";
// project_title, general_text, project_image, button_link, button_text
// https://www.youtube.com/watch?v=dQw4w9WgXcQ
const BodyArea = () => {
  return (
    <div className="Body">
      <div className="Projects-Section-Title">Projects</div>
      <div className="Projects">
        <ProjectCard
          projectTitle="Sprocket Stats"
          role="Frontend Developer"
          generalText="Collaborated with 4 other people to create a fullstack web application used for scouting robots in the 2022-2023 FIRST robotics competitions."
          projectImage={sprocketStats}
          buttonLink="https://www.sprocketstats.io/"
        />
        <ProjectCard
          projectTitle="Anagrams Solver"
          role="Programmed in Python"
          generalText="Designed and constructed an app that solves all possible anagrams from any number of user inputted letters."
          projectImage={anagramsSolver}
          buttonLink="https://github.com/MichaelWuhu/Anagrams-Solver"
        />
        <ProjectCard
          projectTitle="Personal Website"
          role="Made with React.js"
          generalText="Through this project, I learned to create a frontend website through React.js. Additionally, I explored reponsiveness with media queries and use of github pages to publish my website."
          projectImage={personalWebsite}
          buttonLink="https://michaelwuhu.github.io/"
        />
      </div>
    </div>
  );
};

export default BodyArea;
