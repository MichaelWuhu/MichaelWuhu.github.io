import "../styles/Projects.css";
import ProjectCard from "../components/ProjectCard";
import { useState, useEffect } from "react";

import anagramsSolver from "../assets/anagramsSolver.png";
import broncohackswebsite from "../assets/bhackswebsite.png";
import icebreak from "../assets/icebreak.png";
import ngcp from "../assets/ngcp.png";
import omlvision from "../assets/omlvision.png";
import sprocketstats from "../assets/sprocketstats.png";
import catAI from "../assets/catAI.png";

const projects = [
    {
        title: "Northrop Grumman Collaboration Project (Ground Control Station)",
        description:
            "Full stack app allowing users to monitor and control autonomous vehicles. Contributed to backend using Rust, PostgreSQL, and Docker.",
        image: ngcp,
        link: "https://github.com/ngcp-project",
    },
    {
        title: "OML Vision",
        description:
            "Full stack app modernizing system workflows built with React Typescript, Node.js, Apache Jena Fuseki, SPARQL, and Docker.",
        image: omlvision,
        link: "https://github.com/opencaesar/oml-vision",
    },
    {
        title: "Icebreak",
        description:
            "Full stack social media app built with React Native, Node.js, Express.js, PostgreSQL, and AWS S3.",
        image: icebreak,
        link: "https://github.com/cppsea/icebreak",
    },
    {
        title: "Sprocket Stats",
        description:
            "Full stack web app used for scouting/collecting data on various FRC robots using React.js, Node.js, Express.js, and MongoDB.",
        image: sprocketstats,
        link: "https://github.com/TeamSprocket/SprocketStats23",
    },
    {
        title: "BroncoHacks Website",
        description:
            "Website for a university-wide hackathon made with React.js and Node.js. Live @ https://broncohacks.org",
        image: broncohackswebsite,
        link: "https://github.com/BroncoHacks-Website/BroncoHacks-Website",
    },
    {
        title: "Anagrams Solver",
        description:
            "Graphical user interface to find anagrams built with python, pandas library, and tkinter.",
        image: anagramsSolver,
        link: "https://github.com/MichaelWuhu/Anagrams-Solver",
    },
    {
        title: "CatAI Discord Bot",
        description:
            "AI Discord bot developed in python using OpenAI's API.",
        image: catAI,
        link: "https://github.com/MichaelWuhu/CatAI",
    },
];

const ProjectsNew = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section id="projects" className="projects-container">
            <h1 className="projects-container-header">Projects</h1>
            {isMobile ?
                <ul className="projects-list">
                    {projects.map((project) => (
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            isLeft={true}
                            link={project.link}
                            isMobile={true}
                        />
                    ))}
                </ul>
                :
                <ul className="projects-list">
                    {projects.map((project, index) => (
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            isLeft={index % 2 === 0}
                            link={project.link}
                            isMobile={false}
                        />
                    ))}
                </ul>
            }

        </section>
    )
}

export default ProjectsNew;