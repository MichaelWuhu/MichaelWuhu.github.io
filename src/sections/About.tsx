import "../styles/About.css";
import picture from "../assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about">
        <h1>Hello! I'm Michael</h1>
        <div className="line"/>
        <div className="about-content">
          <img src={picture} alt="" />
          <p>
            I'm an undergraduate student at Cal Poly Pomona pursuing my B.S. in
            computer science. 
            <br /><br />
            I think that software development is a great way
            to express creativity and solve problems. I'm always looking for new
            projects to work on and new things to learn. 
            <br /><br />
            Currently I'm working
            on the Northrop Grumman Collaboration Project where I'm developing
            software to help make an impact through autonomous vehicles. I'm
            also the project initiative chair for the ACM Chapter @
            Cal Poly Pomona where I am constantly helping students bring
            their ideas come to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
