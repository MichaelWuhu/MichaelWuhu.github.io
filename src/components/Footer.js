import "../styles/Footer.css";

import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
              Diamond Bar, CA
            </h4>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
              909-918-9550
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
              mlmichaelwu@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>I'm an undergraduate student at Cal Poly Pomona pursuing my B.S. in computer science. Come check out my linkedin and github! </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/michael-ml-wu/" target="_blank"  rel="noreferrer">
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/MichaelWuhu" target="_blank"  rel="noreferrer">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
