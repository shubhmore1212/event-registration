import React from "react";
import { Formik, Form } from "formik";

import Logo from "layouts/Logo";
import CredentialContent from "layouts/ui/CredentialContent";
import { FormikControl } from "shared/components/FormikControl";
import { FORM_OPTIONS } from "shared/constants";

import { loginPropsType } from "types/form.types";

import "./styles/styles.css";

const LoginForm = (props: loginPropsType) => {
  const { initialValues, validationSchema, handleSubmit, homeNavigation } =
    props;

  return (
    <>
      <Logo id="login-heading" homeNavigation={homeNavigation} />
      <div className="login-content">
        <CredentialContent
          heading="Sign In to Event Expo"
          paragraph="Using your email account:"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <div className="form-login">
              <Form autoComplete="off">
                <FormikControl
                  type="text"
                  className="input-email"
                  control={FORM_OPTIONS.INPUT}
                  name="email"
                  label="YOUR EMAIL"
                  placeholder="john@gmail.com"
                />
                <FormikControl
                  type="password"
                  className="input-password"
                  control={FORM_OPTIONS.INPUT}
                  name="password"
                  label="PASSWORD"
                  placeholder="5+ characters"
                />
                <button type="submit" className="log-in-btn">
                  Log In
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default React.memo(LoginForm);
