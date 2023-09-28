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
          <h4>about</h4>
          <p>who what whatever whatever whatever whatever whatever </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/michael-ml-wu/" target="_blank">
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/MichaelWuhu" target="_blank">
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
