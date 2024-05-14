import "../styles/Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const [open, setOpen] = useState(false);
  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link className={"header-link"} to="/" onClick={closeMenu}>
        <h1>MICHAEL WU</h1>
      </Link>
      <div className="links">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="link" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/Experience" onClick={closeMenu}>
              Experience
            </Link>
          </li>
          {/* <li>
          <Link className="link" to="/About"  onClick={closeMenu}>
            About
          </Link>
        </li> */}
        </ul>
      </div>

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
            <Link
              className="navLinks"
              to="/"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Home</li>
            </Link>
            <Link
              className="navLinks"
              to="/experience"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li className="dropdown-item">Experience</li>
            </Link>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
