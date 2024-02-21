import "../styles/Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
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

  return (
    <div className={color ? "header header-bg a " : "header"}>
      <Link className={color ? "header-link" : ""} to="/" onClick={closeMenu}>
        <h1>MICHAEL WU</h1>
      </Link>
      <div className="links">
        <ul className="nav-menu">
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
          <Link className="link" to="/About" onClick={closeMenu}>
            About
          </Link>
        </li> */}
        </ul>
      </div>

      <div className="hamburger-container" onClick={handleClick}>
        <div className="hamburger-menu">
          {click ? (
            <FaTimes size={30} style={{ color: "#E0E1DD" }} />
          ) : (
            <FaBars size={30} style={{ color: "#E0E1DD" }} />
          )}
        </div>
        {/* {click ? <div>open</div> : <div>closed</div>} */}
      </div>

      {/* <div className="hamburger" onClick={handleClick}>
        {click ? (
          <div className="hamburger-open">
            <FaTimes
              size={30}
              style={color ? { color: "#588157" } : { color: "#3a5a40" }}
            />
            <div className="hamburger-links">
              <ul className="hamburger-nav-menu">
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
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <FaBars
              size={30}
              style={color ? { color: "#588157" } : { color: "#3a5a40" }}
            />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
