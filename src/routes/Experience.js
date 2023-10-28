import "../styles/Experience.css";

import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";

import sprocketLogo from "../images/sprocket.png"

import React from "react";

const Experience = () => {
  return (
    <div className="Experience">
      <h1 className="Heading">Experience</h1>
      <ExperienceCard
        experienceTitle="Team 3473 Sprocket Robotics"
        role="Software Engineer"
        generalText="Team 3473 is Diamond Bar High School's competitive robotics team. 
        On this team, I led the frontend development of the robot scouting app used by 
        members to collect data on other team's robots. The data was then analyzed and 
        visualized to help determine who we would form alliances with in the playoffs."
        experienceImage={sprocketLogo}
      />
      <Footer />
    </div>
  );
};

export default Experience;
