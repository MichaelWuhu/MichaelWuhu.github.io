import "../styles/Home.css";

import React from "react";
// import ProjectCard from "../components/ProjectCard";


import self from "../images/self.png";

const Home = () => {
  // const projects = [
  //   {
  //     title: "Icebreak",
  //     description:
  //       "Mobile app created for students/users to connect with others through clubs/guilds and stay updated with events on campus. ",
  //     image: icebreak,
  //     imageAltText: "icebreak ",
  //     link: "https://github.com/cppsea/icebreak",
  //   },
  //   {
  //     title: "Sprocket Stats",
  //     description:
  //       "Web application used for scouting/collecting data on various FRC robots. Data was then visualized in heatmaps to be used in competitions.",
  //     image: sprocketstats,
  //     imageAltText: "sprocket stats",
  //     link: "https://github.com/TeamSprocket/SprocketStats23",
  //   },
  //   {
  //     title: "Anagrams Solver",
  //     description:
  //       "Graphical user interface which takes any amount of letters and unscrambles them to find possible anagrams.",
  //     image: anagramsSolver,
  //     imageAltText: "anagrams solver",
  //     link: "https://github.com/MichaelWuhu/Anagrams-Solver",
  //   },
  //   {
  //     title: "CatAI Discord Bot",
  //     description:
  //       "Discord bot that utilizes OpenAI API to give unique generated responses. The bot will only respond if pinged in the message.",
  //     image: catAI,
  //     imageAltText: "catAI",
  //     link: "https://github.com/MichaelWuhu/CatAI",
  //   },
  // ];

  return (
    <div className="home">
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="content-container">
        <h1>Hi, I'm Michael</h1>
        <div className="horizontal-line"></div>

        <div className="description-container">
          
          <div className="pfp-container">
            <img src={self} alt="" />
          </div>

          <p>
            I'm an undergraduate student at Cal Poly Pomona pursuing my B.S. in
            computer science.
            <br />
            <br />
            I think that software development is a great way to express
            creativity and solve problems. I'm always looking for new projects
            to work on and new things to learn.
            <br />
            <br />
            Currently I'm working on the Northrop Grumman Collaboration Project
            where I'm developing software to help make an impact through
            autonomous vehicles. I'm also the project initiative chair for the
            Computer Science Society @ Cal Poly Pomona where I am constantly
            working with students to help their ideas come to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
