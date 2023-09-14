import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default App;
