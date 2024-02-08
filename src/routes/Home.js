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
      description:
        "Mobile app created for students/users to connect with others through clubs/guilds and stay updated with events on campus. ",
      image: icebreak,
      imageAltText: "icebreak ",
    },
    {
      title: "Sprocket Stats",
      description:
        "Web application used for scouting/collecting data on various FRC robots. Data was then visualized in heatmaps to be used in competitions.",
      image: sprocketstats,
      imageAltText: "sprocket stats",
    },
    {
      title: "Anagrams Solver",
      description:
        "Graphical user interface which takes any amount of letters and unscrambles them to find all possible anagrams (based on the scrabble dictionary).",
      image: anagramsSolver,
      imageAltText: "anagrams solver",
    },
  ];

  // const projects = [{title: "temp 1", description: "test desc 1", image: anagramsSolver, imageAltText: "temp sfabf"}];

  return (
    <div className="home">
      {/* <div className="greeting">Hi, I'm Michael</div> */}
      <div className="greeting">TEMP</div>
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
