import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <Link to="#">MyApp</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="#about">About</Link>
                </li>
                <li>
                    <Link to="#projects">Projects</Link>
                </li>
                <li>
                    <Link to="#experiences">Experiences</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;