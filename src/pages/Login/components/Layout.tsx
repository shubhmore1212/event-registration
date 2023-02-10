import React from "react";
import { FormikHelpers } from "formik";

import LoginForm from "./LoginForm";
import CredentialImage from "../../../layouts/ui/CredentialImage";

import "./styles/styles.css";
interface IProps {
  initialValues: { email: string; password: string };
  validationSchema: any;
  handleSubmit: (values: any, actions: FormikHelpers<any>) => void;
  buttonHandler: () => void;
}

const LoginLayout: React.FC<IProps> = (props) => {
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
