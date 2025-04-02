import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const emailAddress = "mlmichaelwu@gmail.com"; 
  
  return (
    <div className="footer">
        <div className="github">
          <a
            href="https://github.com/MichaelWuhu"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={50}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/michael-ml-wu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={50}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </a>
        </div>
        <div className="email">
          <a
            href={`mailto:${emailAddress}?subject=`}
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope
              size={50}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </a>
        </div>
      </div>
  );
};

export default Footer;