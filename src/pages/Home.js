import React from "react";
import Imgbg from '../assets/home-wallpaper.jpeg'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="img-container">
                <img className="img-view" src={Imgbg} alt="background-img" />
            </div>
            <div className="my-name">
                <h1>Deondrae Francis</h1>
            </div>
        </div>
    )
}

export default Home