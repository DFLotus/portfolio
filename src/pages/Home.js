import React from "react";
import Navbar from "../component/Navbar";
import HomeContainer from "../component/HomeContent";
import About from "../component/About";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <HomeContainer />
            <About />
        </div>
    )
}

export default Home