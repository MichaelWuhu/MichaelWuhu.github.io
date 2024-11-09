import "../styles/Footer.css";

import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="github">
          <a
            href="https://github.com/MichaelWuhu"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <p>https://github.com/MichaelWuhu</p>
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/michael-ml-wu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <p>https://www.linkedin.com/in/michael-ml-wu/</p>
          </a>
        </div>
        <div className="email">
          <FaMailBulk
            size={30}
            style={{ color: "white", marginRight: "1rem" }}
          />
          <p>mlmichaelwu@gmail.com</p>
        </div>
    </div>
  );
};

export default Footer;