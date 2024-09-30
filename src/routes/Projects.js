import "../styles/Projects.css";

import React from "react";
import ProjectCard from "../components/ProjectCard";

import broncohackswebsite from "../images/BroncoHacks Website.png";
import icebreak from "../images/icebreak.png";
import sprocketstats from "../images/sprocketstats.png";
import anagramsSolver from "../images/anagrams solver.png";
import catAI from "../images/catAI.png";

const Projects = () => {
  const projects = [
    {
      title: "BroncoHacks Website",
      description:
        "Website for a university-wide hackathon with over 300 participants. Portal allowed students to register, view sponsors, and submit projects.",
      image: broncohackswebsite,
      imageAltText: "broncohacks website",
      link: "https://github.com/BroncoHacks-Website",
    },
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
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">Projects</div>
        <ul>
          {projects.map((project) => (
            <ProjectCard
              projectName={project.title}
              projectDescription={project.description}
              projectLink={project.link}
              projectImage={project.image}
              projectImageAltText={project.imageAltText}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
