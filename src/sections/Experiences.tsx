import "../styles/Experiences.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ngcp from "../assets/ngcp.png";
import cppcss from "../assets/cppcss.png";
import sprocket from "../assets/sprocket.png";

const experiences = [
  {
    title: "Northrop Grumman Collaboration Project (NGCP)",
    role: "GCS Database",
    description:
      "A collaboration between Cal Poly Pomona and Cal Poly Slo campuses to build autonomous vehicles.",
    image: ngcp,
    alt: "ngcp",
    link: "https://github.com/ngcp-project",
  },
  {
    title: "Computer Science Society (ACM Chapter)",
    role: "Project Chair",
    description:
      "California State Polytechnic University, Pomona's ACM chapter offering students on campus workshops, projects, and hackathons to participate in.",
    image: cppcss,
    alt: "cppcss",
    link: "https://cppcss.club/",
  },
  {
    title: "Team Sprocket (FRC 3473)",
    role: "Software Engineer",
    description:
      "Student led, robotics team in Diamond Bar participating in FIRST Robotics competitions.",
    image: sprocket,
    alt: "sprocket",
    link: "https://www.team3473.com/",
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="experiences-container">
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={700}
        component="div"
      >
        Experiences
      </Typography>
      <ul className="experiences">
        {experiences.map((experience, index) => (
          <li key={index}>
            <Card
              className="experience-card"
              sx={{
                width: "auto",
                maxWidth: 1000,
                color: "rgb(187, 187, 187)",
                transition: "0.5s",
                border: "5px solid rgb(175, 150, 200)",
                padding: "0.5rem",
                backgroundColor: "transparent",
              }}
            >
              <div className="experience-title-and-body">
                <CardHeader
                  className="experience-title"
                  sx={{ textDecoration: "underline" }}
                  title={
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: "bold", fontSize: "1.75rem" }}
                    >
                      {experience.title}
                    </Typography>
                  }
                />
                <CardContent sx={{ width: "auto" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgb(187, 187, 187)", fontSize: "1.35rem" }}
                  >
                    {experience.description}
                  </Typography>
                </CardContent>
              </div>
              <div>
                <CardMedia
                  component="img"
                  height="200"
                  image={experience.image}
                  alt={experience.alt}
                  sx={{ objectFit: "contain" }}
                />
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiences;
