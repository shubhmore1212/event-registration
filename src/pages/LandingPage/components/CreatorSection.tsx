import React from "react";

import WordArray from "./WordArray";

const CreatorSection = () => {
  return (
    <div id="about" className="creator-container">
      <div className="creator-image">
        <div className="creator-image-subtitle">
          <div>WHO WE</div>
          <div>ARE</div>
        </div>
      </div>
      <div className="creator-form">
        <div className="creator-position">
          <WordArray />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CreatorSection);
