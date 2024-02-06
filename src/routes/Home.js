import "../styles/Home.css";

import React from "react";

import ProjectCard from "../components/ProjectCard";

import icebreak from "../images/icebreak.png";
import sprocketstats from "../images/sprocketstats.png";
import anagramsSolver from "../images/anagrams solver.png";

const Home = () => {
  const projects = [
    {
      title: "Icebreak",
      description: "one",
      image: icebreak,
      imageAltText: "icebreak ",
    },
    {
      title: "Sprocket Stats",
      description: "two",
      image: sprocketstats,
      imageAltText: "sprocket stats",
    },
    {
      title: "Anagrams Solver",
      description: "three",
      image: anagramsSolver,
      imageAltText: "anagrams solver",
    },
  ];

  return (
    <div className="home">
      <div className="greeting">Hi, I'm Michael</div>
      <div className="description">
        I'm an undergraduate student at Cal Poly Pomona pursuing my B.S. in
        computer science.
      </div>
      <div className="project-header">Projects</div>
      <ul>
        {projects.map((project) => (
          <ProjectCard
            projectName={project.title}
            projectDescription={project.description}
            projectImage={project.image}
            projcetImageAltText={project.imageAltText}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
