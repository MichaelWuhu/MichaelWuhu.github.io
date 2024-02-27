import "../styles/Home.css";

import React from "react";
import ProjectCard from "../components/ProjectCard";

import icebreak from "../images/icebreak.png";
import sprocketstats from "../images/sprocketstats.png";
import anagramsSolver from "../images/anagrams solver.png";
import catAI from "../images/catAI.png";

const Home = () => {
  const projects = [
    {
      title: "Icebreak",
      description:
        "Mobile app created for students/users to connect with others through clubs/guilds and stay updated with events on campus. ",
      image: icebreak,
      imageAltText: "icebreak ",
      link: "https://github.com/cppsea/icebreak",
    },
    {
      title: "Sprocket Stats",
      description:
        "Web application used for scouting/collecting data on various FRC robots. Data was then visualized in heatmaps to be used in competitions.",
      image: sprocketstats,
      imageAltText: "sprocket stats",
      link: "https://github.com/TeamSprocket/SprocketStats23",
    },
    {
      title: "Anagrams Solver",
      description:
        "Graphical user interface which takes any amount of letters and unscrambles them to find possible anagrams.",
      image: anagramsSolver,
      imageAltText: "anagrams solver",
      link: "https://github.com/MichaelWuhu/Anagrams-Solver",
    },
    {
      title: "CatAI Discord Bot",
      description:
        "Discord bot that utilizes OpenAI API to give unique generated responses. The bot will only respond if pinged in the message.",
      image: catAI,
      imageAltText: "catAI",
      link: "https://github.com/MichaelWuhu/CatAI",
    },
  ];

  return (
    <div className="home">
      <div className="greeting">Hi, I'm Michael</div>
      <div className="description">
        I'm an undergraduate student at Cal Poly Pomona pursuing my B.S. in
        computer science.
      </div>
      <div className="projects-container">
        <div className="project-header">Projects</div>
        <ul>
          {projects.map((project) => (
            <ProjectCard
              projectName={project.title}
              projectDescription={project.description}
              projectImage={project.image}
              projectImageAltText={project.imageAltText}
              projectLink={project.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
