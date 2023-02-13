import React from "react";

import "./styles/styles.css";

const Navbar = () => {

  return (
    <div className="nav-container">
      <div className="logo">
        <h1>Event ExPo</h1>
      </div>
      <div className="nav-links">
        <div className="nav-link">HOME</div>
        <div className="nav-link">ABOUT</div>
        <div className="nav-link">CONTACT</div>
      </div>
      <div className="nav-credentials">
        <div className="login">LOGIN</div>
        <div className="sign-up">SIGN UP</div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
