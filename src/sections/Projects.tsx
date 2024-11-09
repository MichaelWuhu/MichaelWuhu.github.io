import "../styles/Projects.css";

import anagramsSolver from "../assets/anagramsSolver.png";
import broncohackswebsite from "../assets/broncoHacksWebsite.png";
import icebreak from "../assets/icebreak.png";
import sprocketstats from "../assets/sprocketstats.png";
import catAI from "../assets/catAI.png";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const projects = [
  {
    title: "BroncoHacks Website",
    description:
      "Website for a university-wide hackathon with over 300 participants. Portal allowed students to register, view sponsors, and submit projects.",
    image: broncohackswebsite,
    alt: "broncohacks website",
    link: "https://github.com/BroncoHacks-Website",
  },
  {
    title: "Icebreak",
    description:
      "Mobile app created for students/users to connect with others through clubs/guilds and stay updated with events on campus. ",
    image: icebreak,
    alt: "icebreak ",
    link: "https://github.com/cppsea/icebreak",
  },
  {
    title: "Sprocket Stats",
    description:
      "Web application used for scouting/collecting data on various FRC robots. Data was then visualized in heatmaps to be used in competitions.",
    image: sprocketstats,
    alt: "sprocket stats",
    link: "https://github.com/TeamSprocket/SprocketStats23",
  },
  {
    title: "Anagrams Solver",
    description:
      "Graphical user interface which takes any amount of letters and unscrambles them to find possible anagrams.",
    image: anagramsSolver,
    alt: "anagrams solver",
    link: "https://github.com/MichaelWuhu/Anagrams-Solver",
  },
  {
    title: "CatAI Discord Bot",
    description:
      "Discord bot that utilizes OpenAI API to give unique generated responses. The bot will only respond if pinged in the message.",
    image: catAI,
    alt: "catAI",
    link: "https://github.com/MichaelWuhu/CatAI",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={700}
        component="div"
      >
        Projects
      </Typography>
      <ul className="projects">
        {projects.map((project, index) => (
          <li key={index}>
            <Card
              className="project-card"
              sx={{
                width: 345,
                color: "rgb(187, 187, 187)",
                transition: "0.5s",
                border: "5px solid rgb(150, 180, 200)",
                padding: "0.5rem",
                backgroundColor: "transparent",
              }}
            >
              <CardHeader
                className="project-title"
                sx={{ textDecoration: "underline" }}
                title={<Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  {project.title}
                </Typography>}
              />
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.alt}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{ color: "rgb(187, 187, 187)", fontSize: "1.1rem" }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              {/* <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                  hihihihi
                </CardContent>
              </Collapse> */}
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
