import React from "react";
import Imgbg from '../assets/home-wallpaper.jpeg'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import '../styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <div className="img-container">
                <img className="img-view" src={Imgbg} alt="background-img" />
            </div>
            <div className="my-name">
                <h1>Deondrae Francis</h1>
                <div className="social-container">
                    <ul>
                        <li><Link></Link></li>
                        <li>
                            <a href="https://github.com/DFLotus" target={"_blank"} rel={"noopener noreferrer"}>
                                <FaGithub className="social-icon" size={"3rem"} color={"white"} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/deondrae-francis-b882241b2/" target={"_blank"} rel={"noopener noreferrer"}>
                                <FaLinkedin className="social-icon" size={"3rem"} color={"white"} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home