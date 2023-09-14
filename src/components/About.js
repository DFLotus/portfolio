import React from "react";
import ProfilePic from '../assets/profile-picture.jpg'
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
                <img className="photo-pic" src={ProfilePic} alt="deondrae-photo" />
                <div className="about-content">
                    <p>{aboutContent}</p>
                </div>
            </div>
            <div className="skill-title">
                <h1>Skills</h1>
                
            </div>

            <div className="skill-container">
                <div className="skills-listed">
                    <div className="skill-name">
                        <p>React.js</p>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" per="60%" style={{ maxWidth: '60%' }}></div>
                    </div>
                </div>

                <div className="skills-listed">
                    <div className="skill-name">
                        <p>C++</p>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" per="70%" style={{ maxWidth: '70%' }}></div>
                    </div>
                </div>

                <div className="skills-listed">
                    <div className="skill-name">
                        <p>Python</p>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" per="40%" style={{ maxWidth: '40%' }}></div>
                    </div>
                </div>




                <div className="skills-listed">
                    <div className="skill-name">
                        <p>MS 365</p>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" per="80%" style={{ maxWidth: '80%' }}></div>
                    </div>
                </div>

                <div className="skills-listed">
                    <div className="skill-name">
                        <p>Java</p>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" per="20%" style={{ maxWidth: '20%' }}></div>
                    </div>
                </div>

                <div className="skills-listed">
                    <div className="skill-name">
                        <p>Git</p>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" per="60%" style={{ maxWidth: '60%' }}></div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default About