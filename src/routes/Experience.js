import "../styles/Experience.css";

import React from "react";
import ExperienceCard from "../components/ExperienceCard";

import cppcss from "../images/cpp css.png";
import sprocket from "../images/sprocket.png";

const Experience = () => {
  const experiences = [
    {
      title: "Computer Science Society (ACM)",
      role: "Project Chair",
      description:
        "California State Polytechnic University, Pomona's largest computer science club offering students on campus workshops, projects, and hackathons to participate in.",
      image: cppcss,
      imageAltText: "cppcss",
    },
    {
      title: "Team Sprocket (FRC 3473)",
      role: "Software Engineer",
      description:
        "Student led, robotics team in Diamond Bar participating in FIRST Robotics competitions.",
      image: sprocket,
      imageAltText: "sprocket",
    },
  ];

  return (
    <div className="experience">
      <div className="experiences-container">
        <div className="experience-header">Experience</div>
        <ul>
          {experiences.map((experience) => (
            <ExperienceCard
              experienceName={experience.title}
              experienceRole={experience.role}
              experienceDescription={experience.description}
              experienceImage={experience.image}
              experienceImageAltText={experience.imageAltText}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
