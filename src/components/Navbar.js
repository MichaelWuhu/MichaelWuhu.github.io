import '../styles/Navbar.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='header'>
            <Link to='/'><h1>MICHAEL WU</h1></Link>
            <ul className={ click ? "nav-menu active" : "nav-menu"}>
                <li><Link className='link' to='/'>Home</Link></li>
                <li><Link className='link' to='/About'>About</Link></li>
                <li><Link className='link' to='/Experience'>Experience</Link></li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                { click ? 
                    (<FaTimes size={20} style={{ color: 'black' }} />) : 
                    (<FaBars size={20} style={{ color: 'black' }} />) }
            </div>
        </div>
    );
}

export default Navbar;