import React from "react";

import Logo from "shared/components/Logo";
import CredentialContent from "layouts/ui/CredentialContent";
import SignInForm from "./SignInForm";

import { loginPropsType } from "types/form.types";

import "./styles/styles.css";

const LoginForm = (props: loginPropsType) => {
  const { initialValues, validationSchema, handleSubmit } = props;

  return (
    <div data-testid="login-form-root-div">
      <Logo id="login-heading" homeNavigation={props.homeNavigation} />
      <div className="login-content">
        <CredentialContent
          heading="Sign In to Event Expo"
          paragraph="Using your email account:"
        />
        <SignInForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default React.memo(LoginForm);
