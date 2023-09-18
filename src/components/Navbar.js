import React from "react";
import { Link } from "react-scroll";
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="container">
            <nav className="nav-item-container">
                <ul className="ul-items">
                    <li className="link-ele"><Link to="about-hook" spy={true} smooth={true} duration={100}>About</Link></li>
                    <li className="link-ele"><Link to="experience-container" spy={true} smooth={true} duration={100}>Resume</Link></li>
                    <li className="link-ele"><Link to="project-img" spy={true} smooth={true} duration={100}>Projects</Link></li>
                    <li className="link-ele"><Link to="affiliations-container" spy={true} smooth={true} duration={100}>Affiliations</Link></li>
                    <li className="link-ele"><Link to="" spy={true} smooth={true} duration={100}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar