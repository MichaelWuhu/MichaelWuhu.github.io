import "../styles/Home.css";
import picture from "../assets/ryo.png";
import { AnimatedBackground } from "animated-backgrounds";

const About = () => {
  return (
    <section id="home" className="home-container">
      <AnimatedBackground animationName="auroraBorealis" clearCanvas={true}/>
      <div className="home-text">
        <h1>
          Michael Wu
        </h1>
        <p>
          Thanks for checking out my website!
        </p>
      </div>
      <img src={picture} alt="" className="" />
    </section >
  );
};

export default About;
