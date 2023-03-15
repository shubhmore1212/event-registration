import React from "react";

import FAQ from "./FAQ";

import "./styles/styles.css";

const OurServices = () => {
  return (
    <div id="contact" className="service-container">
      <div className="service-form">
        <div className="service-position">
          <h1>Some Questions That</h1>
          <h1>We Get Frequently</h1>
          <FAQ />
        </div>
      </div>
      <div className="service-image">
        <div className="service-image-subtitle">
          <div>FREQUENTLY</div>
          <div>ASKED</div>
          <div>QUESTIONS</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OurServices);
