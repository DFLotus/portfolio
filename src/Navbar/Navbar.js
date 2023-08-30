import React from "react";
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar-container">
            <nav className="nav-card">
                <ul className="nav-items">
                    <li><a>About</a></li>
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