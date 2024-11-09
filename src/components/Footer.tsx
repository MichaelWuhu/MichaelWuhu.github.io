import "../styles/Footer.css";

import resume from "../assets/Resume-MichaelWu.pdf";

import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Footer = () => {
  const openPdf = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className="footer">
      <div className="footer-links">
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
      <div className="resume-button">
        <Button
          size="large"
          variant="outlined"
          sx={{
            width: 200,
            height: 60,
            border: "3.5px solid rgb(200, 150, 150)",
            color: "lightgray",
            backgroundColor: "transparent",
          }}
          onClick={openPdf}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
            Resume
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
