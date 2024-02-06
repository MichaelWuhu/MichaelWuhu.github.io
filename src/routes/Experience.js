import "../styles/Experience.css";

import React from "react";
import ExperienceCard from "../components/ExperienceCard";

import cppcss from "../images/cpp css.png";
import sprocket from "../images/sprocket.png";

const Experience = () => {
  const experiences = [
    {
      title: "Computer Science Society (ACM)",
      description: "one",
      image: cppcss,
      imageAltText: "cppcss",
    },
    {
      title: "Team Sprocket (FRC 3473)",
      description: "two",
      image: sprocket,
      imageAltText: "sprocket",
    },
  ];

  return (
    <div className="experience">
      <div className="experience-header">Experience</div>
      <ul>
        {experiences.map((experience) => (
          <ExperienceCard
          experienceName={experience.title}
          experienceDescription={experience.description}
          experienceImage={experience.image}
          experienceImageAltText={experience.imageAltText}
        />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
