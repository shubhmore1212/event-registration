import React from "react";

import "./styles/styles.css"

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="content-container"></div>
      <div className="image-container">
        <div className="image-1"></div>
        <div className="images-2-3">
        <div className="image-2"></div>
        <div className="image-3"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
