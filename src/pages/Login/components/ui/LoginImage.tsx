import React from "react";

import "./styles/styles.css";

const LoginImage = () => {
  return (
    <div className="login-image-content">
      <div id="sub-heading">
        <h2>Hello, Friend!</h2>
      </div>
      <p>Enter your details and start a journey with us!</p>
      <button>Sign Up</button>
    </div>
  );
};

export default React.memo(LoginImage);
