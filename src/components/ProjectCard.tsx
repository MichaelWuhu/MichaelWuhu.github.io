import "../styles/ProjectCard.css";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    isLeft: boolean;
    link: string;
    isMobile: boolean;
}

const ProjectCard = (props: ProjectCardProps) => {

    const isLeft = props.isLeft;
    const isMobile = props.isMobile;

    const openLink = () => {
        window.open(props.link, "_blank");
    }

    return (
        <div>
            {isLeft ?
                <div className={"project-card"}>
                    <div className="project-card-text" style={isMobile ? undefined : { transform: "translateX(10%)" }}>
                    {/* <div className="project-card-text"> */}
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <button onClick={openLink}>View Project</button>
                    </div>
                    <div className="project-card-image-container" style={{ justifyContent: "right"}}>
                        <img src={props.image} alt="" onClick={openLink}/>
                    </div>
                </div> :
                <div className={"project-card"}>
                    <div className="project-card-image-container" style={{ justifyContent: "left"}}>
                    <img src={props.image} alt="" onClick={openLink}/>
                </div>
                <div className="project-card-text" style={{ transform: "translateX(-10%)" }}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <button onClick={openLink}>View Project</button>
                </div>
                
            </div>}
        </div>
    )
}

export default ProjectCard;