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
            <FaHome size={30} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>123 street address</p>
              <p>Country</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
              123-456-7890
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
              email@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>about</h4>
          <p>who what whatever whatever whatever whatever whatever </p>
          <div className="social">
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
              href={"https://www.linkedin.com/in/michael-ml-wu/"}
            />
            <FaGithub
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
