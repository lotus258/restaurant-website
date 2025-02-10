import "./CSS/Nav.css"
import {useState} from 'react'

function Nav() {
    const[isMobile, setIsMobile] =  useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    }

    return (
        <nav className="nav-bar">
            <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./menu.html">Menu</a></li>
                <li><a href="./reservations.html">Reservations</a></li>
                <li><a href="./login.html">Login</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
}

export default Nav;