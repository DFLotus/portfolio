import React, { useState } from "react";
import ColorStackLogo from "../assets/colorStackLogo.jpg";
import MLTLogo from "../assets/MLT-logo.jpg"
import CTPlogo from "../assets/ctp-logo-square.png"
import OppnetLogo from "../assets/oppnet-logo.jpg"
import BTTLogo from "../assets/break-through-tech.png"
import CodePathLogo from "../assets/code-path-logo.jpg"
import '../styles/Affiliations.css'

const Affiliations = () => {

    return (
        <div className="affiliations-container">
            <div className="affiliations-header">
                <h1>Affiliations</h1>
            </div>
            <div className="img-content">
                <img alt="affiliations-img" src={ColorStackLogo} className="affiliations-img" />
                <img alt="affiliations-img" src={MLTLogo} className="affiliations-img" />
                <img alt="affiliations-img" src={CTPlogo} className="affiliations-img" />
                <img alt="affiliations-img" src={OppnetLogo} className="affiliations-img" />
                <img alt="affiliations-img" src={BTTLogo} className="affiliations-img" />
                <img alt="affiliations-img" src={CodePathLogo} className="affiliations-img" />
            </div>
        </div>
    );
}

export default Affiliations