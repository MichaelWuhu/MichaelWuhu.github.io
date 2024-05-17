import "../styles/Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <div className={"header"}>
      <Link className={"header-name"} to="/">
        <h1>MICHAEL WU</h1>
      </Link>

      <ul className={"nav-menu"}>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Experience">
            Experience
          </Link>
        </li>
      </ul>

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
          <Link to="/" onClick={() => setOpen(!open)}>
            <li className="dropdown-item">Home</li>
          </Link>
          <Link to="/experience" onClick={() => setOpen(!open)}>
            <li className="dropdown-item">Experience</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
