import "../styles/Navbar.css";

const Navbar = () => {
  
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href")?.substring(1);
        document.getElementById(targetId!)?.scrollIntoView({ behavior: "smooth" });
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
    </nav>
  );
};

export default Navbar;
