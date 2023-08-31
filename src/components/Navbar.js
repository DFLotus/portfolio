import React from "react";
import { Link } from "react-scroll";
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar-container">
            <nav className="nav-card">
                <ul className="nav-items">
                    <li><Link to="about-container" spy={true} smooth={true} duration={100}>About</Link></li>
                    <li><a>Resume</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Affiliations</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar