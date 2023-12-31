import React from "react";
import BgImg from '../assets/home-wallpaper.jpeg'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="img-container">
                <img className="img-view" src={BgImg} alt="background-img" />
            </div>
            <div className="name-container">
                <h1>Deondrae Francis</h1>
                <div className="social-container">
                    <ul>
                        <li>
                            <a href="https://github.com/DFLotus" target={"_blank"} rel={"noopener noreferrer"}>
                                <FaGithub className="social-icon" color={"white"} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/deondrae-francis-b882241b2/" target={"_blank"} rel={"noopener noreferrer"}>
                                <FaLinkedin className="social-icon" color={"white"} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home