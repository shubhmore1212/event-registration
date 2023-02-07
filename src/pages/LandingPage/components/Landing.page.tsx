import React from "react";

import Navbar from "../../../layouts/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";

import "./styles/styles.css";

const Landing = () => {
  return (
    <div className="box">
      <Navbar />
      <HeroSection />
      <OurServices />
      <Contact />
      <Footer/>
    </div>
  );
};

export default React.memo(Landing);
