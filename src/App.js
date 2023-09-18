import './styles/App.css'
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Affiliations from "./components/Affiliations";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Project />
      <Affiliations />
      <Contact />
    </div>
  );
}

export default App;
