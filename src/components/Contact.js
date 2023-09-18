import React from "react";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import "../styles/Contact.css"

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact</h1>
                <p>I'd love to get to know more about you and stayed conntect!</p>
            </div>
            <footer>
                <div className="social-icons">
                    <a href="https://github.com/DFLotus" target={"_blank"} rel={"noopener noreferrer"}>
                        <FaGithub className="icon" color={"white"} />
                    </a>
                    <a href="https://www.linkedin.com/in/deondrae-francis-b882241b2/" target={"_blank"} rel={"noopener noreferrer"}>
                        <FaLinkedin className="icon" color={"white"} />
                    </a>
                    <a href="mailto:deondraefrancis101@gmail.com" target={"_blank"} rel={"noopener noreferrer"}>
                        <SiMinutemailer className="icon" color={"white"} />
                    </a>
                </div>
            </footer>
        </div>
    )
}


export default Contact
