import React from "react";

import LoginForm from "./LoginForm";
import CredentialImage from "layouts/ui/CredentialImage";

import { loginPropsType } from "types/form.types";

import "./styles/styles.css";

const LoginLayout: React.FC<loginPropsType> = (props) => {
  
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-position">
          <LoginForm {...props} />
        </div>
      </div>
      <div className="login-image">
        <CredentialImage
          heading="Hello, Friend!"
          paragraph="Enter your details and start a journey with us!"
          buttonName="Sign Up"
          buttonHandler={props.buttonHandler}
        />
      </div>
    </div>
  );
};

export default React.memo(LoginLayout);
