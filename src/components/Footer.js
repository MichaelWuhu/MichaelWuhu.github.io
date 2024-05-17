import "../styles/Footer.css";

import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/MichaelWuhu"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
          https://github.com/MichaelWuhu
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/michael-ml-wu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            size={30}
            style={{ color: "white", marginRight: "1rem" }}
          />
          https://www.linkedin.com/in/michael-ml-wu/
        </a>
      </div>
      <div>
        <FaMailBulk size={30} style={{ color: "white", marginRight: "1rem" }} />
        mlmichaelwu@gmail.com
      </div>
    </div>
  );
};

export default Footer;
