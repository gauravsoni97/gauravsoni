import React from "react";
import "../../index.css";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact/Contact";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-content">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Main;
