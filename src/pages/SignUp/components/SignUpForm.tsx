import React from "react";

import Logo from "shared/components/Logo";
import CredentialContent from "layouts/ui/CredentialContent";
import RegisterForm from "./RegisterForm";

import { ISignUpFormProps } from "types/form.types";

import "./styles/styles.css";

const SignUpForm = (props: ISignUpFormProps) => {
  
  return (
    <>
      <Logo id="login-heading" homeNavigation={props.homeNavigation} />
      <div className="login-content">
        <CredentialContent
          heading="Create Account"
          paragraph={`A few clicks away from enjoying the events you enjoyed never before!`}
        />
        <RegisterForm {...props} />
      </div>
    </>
  );
};

export default React.memo(SignUpForm);
