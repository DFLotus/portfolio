import React, { useState } from "react";
import PersonalWeb from "../assets/personal-website.png";
import { FaReact } from "react-icons/fa"
import { BiLogoJavascript } from "react-icons/bi"
import "../styles/Project.css";

const Project = () => {
    const [isClicked, setOnClick] = useState(false);

    const imgOpened = () => {
        setOnClick(true);
    };

    const imgClosed = () => {
        setOnClick(false);
    };

    return (
        <div className="project-container">
            <div className="project-header">
                <h1>Projects</h1>
            </div>
            <div className="project-wrapper">
                <img
                    alt="project-img"
                    src={PersonalWeb}
                    className="project-img"
                />
                <div className="project-overlay" onClick={imgOpened}>
                    <div className="project-desc">
                        <h1>Personal Website</h1>
                        <p>Web dev</p>
                    </div>
                </div>
                {isClicked && (
                    <div className="pop-up-container">
                        <div className="pop-up-wrapper">
                            <div className="pop-up-content">
                                <div className="pop-up-image">
                                    <img alt="project-img" src={PersonalWeb} />
                                </div>
                                <div className="pop-up-text">
                                    <h1>Personal Website</h1>
                                    <FaReact className="project-icon" color={"#61DBFB"} />
                                    <BiLogoJavascript className="project-icon" />
                                </div>
                                <div className="pop-up-button">
                                    <button onClick={imgClosed}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;
