import '../styles/Navbar.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div className='header'>
            <Link to='/' onClick={closeMenu}><h1>MICHAEL WU</h1></Link>
            <ul className={ click ? "nav-menu active" : "nav-menu"}>
                <li><Link className='link' to='/' onClick={closeMenu}>Home</Link></li>
                <li><Link className='link' to='/About' onClick={closeMenu}>About</Link></li>
                <li><Link className='link' to='/Experience' onClick={closeMenu}>Experience</Link></li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                { click ? 
                    (<FaTimes size={30} style={{ color: 'white'}} />) : 
                    (<FaBars size={30} style={{ color: 'white'}} />) 
                }
            </div>
        </div>
    );
}

export default Navbar;