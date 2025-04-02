import "../styles/Navbar.css";
import { useState } from "react";
import resume from "../assets/Resume-MichaelWu.pdf";

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    document.getElementById(targetId!)?.scrollIntoView({ behavior: "smooth" });
  };

  const [open, setOpen] = useState(false);
  const toggleHamburger = () => {
    setOpen(!open);
  };

  const openPdf = () => {
    window.open(resume, "_blank");
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            className="navbar-link"
            data-nav-link=""
            onClick={handleScroll}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="navbar-link"
            data-nav-link=""
            onClick={handleScroll}
          >
            Projects
          </a>
        </li>
        <li>
            <a
            href="#resume"
            className="navbar-link"
            data-nav-link=""
            onClick={(e) => {
              e.preventDefault();
              openPdf();
            }}
            >
            Resume
            </a>
        </li>
      </ul>

      <div className="hamburger-and-dropdown">
        <div className="hamburger">
          <div id="hamburger-container">
            <div
              id="hamburger"
              className={open ? "open" : ""}
              onClick={toggleHamburger}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul className="dropdown-item-container">
            <a
              className="navLinks"
              href="#home"
              data-nav-link=""
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Home</li>
            </a>
            <a
              className="navLinks"
              href="#projects"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Projects</li>
            </a>
            <a
              className="navLinks"
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                openPdf();
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Resume</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
