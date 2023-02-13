import React from "react";
import { FormikHelpers } from "formik";

import CredentialImage from "../../../layouts/ui/CredentialImage";
import SignUpForm from "./SignUpForm";

import { ISignUpFormProps } from "../constants";

import "./styles/styles.css";

const SignUpLayout: React.FC<ISignUpFormProps> = (props) => {

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-image">
          <CredentialImage
            heading="Welcome Back"
            paragraph={`To keep connected with us please login with your personal info`}
            buttonName="Sign In"
            buttonHandler={props.buttonHandler}
          />
        </div>
        <div className="signup-position">
          <SignUpForm {...props} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SignUpLayout);
