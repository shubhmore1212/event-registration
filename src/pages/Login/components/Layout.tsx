import React from "react";
import { FormikHelpers } from "formik";

import LoginForm from "./LoginForm";
import LoginImage from "./ui/LoginImage";

import "./styles/styles.css";

interface IProps {
  initialValues: { email: string; password: string };
  validationSchema:any;
  handleSubmit: (values: any, actions: FormikHelpers<any>) => void;
}

const LoginLayout:React.FC<IProps> = (props) => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-position">
          <LoginForm {...props}/>
        </div>
      </div>
      <div className="login-image">
        <LoginImage />
      </div>
    </div>
  );
};

export default React.memo(LoginLayout);
