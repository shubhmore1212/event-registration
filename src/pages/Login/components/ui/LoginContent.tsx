import React from "react";

import "./styles/styles.css"

const LoginContent = () => {
  return (
    <>
      <div className="sub-heading">
        <h2>Sign In to Event Expo</h2>
      </div>
      <div className="login-social-links">
        <div>Facebook</div>
        <div>Google+</div>
        <div>LinkedIn</div>
      </div>
      <div>
        <p>or use your email account:</p>
      </div>
    </>
  );
};

export default React.memo(LoginContent);
