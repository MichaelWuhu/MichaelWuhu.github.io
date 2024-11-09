import "../styles/Navbar.css";
import { useState } from "react";

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

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <a href="#/">Michael Wu</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a
            href="#about"
            className="navbar-link"
            data-nav-link=""
            onClick={handleScroll}
          >
            About
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
            href="#experiences"
            className="navbar-link"
            data-nav-link=""
            onClick={handleScroll}
          >
            Experiences
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
              href="#about"
              data-nav-link=""
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">About</li>
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
              href="#experiences"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Experience</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
