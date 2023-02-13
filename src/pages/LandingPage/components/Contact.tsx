import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="map-container"></div>
        <div className="contact-form"></div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
