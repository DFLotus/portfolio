import React from "react";
import ProfileID from '../assets/profile-picture.jpg'
import '../styles/About.css'

const aboutContent = "I'm seeking to learn more about the tech industry as well as machine learning and AI. I am also a Hunter College student, class of 2025 spring B.S. of Computer Science. My interests are growing, and I would like to learn more and focus on web development, data science and analysis, as well as back-end development"

const About = () => {
    return (
        <div className="about-container">
            <div className="about-info">
                <h2>About</h2>
            </div>
            <div className="about-hook">
                <h3>Let me introduce myself</h3>
            </div>
            <div className="img-container">
                <img className="photo-id" src={ProfileID} alt="deondrae-photo" />
                <div className="about-content">
                    <p>{aboutContent}</p>
                </div>
            </div>
            <div className="about-qualification">
                <h3>Skills</h3>
            </div>
        </div>
    )
}


export default About