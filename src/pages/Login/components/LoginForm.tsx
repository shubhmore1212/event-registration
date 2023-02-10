import React from "react";
import { Formik, Form, FormikHelpers } from "formik";

import Logo from "../../../layouts/Logo";
import CredentialContent from "../../../layouts/ui/CredentialContent";
import { FormikControl } from "../../../shared/components/FormikControl";

import { FORM_OPTIONS } from "../../../shared/constants";

import "./styles/styles.css";

interface IProps {
  initialValues: { email: string; password: string };
  validationSchema: any;
  handleSubmit: (values: any, actions: FormikHelpers<any>) => void;
}

const LoginForm: React.FC<IProps> = (props) => {
  const { initialValues, validationSchema, handleSubmit } = props;

  return (
    <>
      <Logo id="login-heading" />
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
              <Form>
                <FormikControl
                  type="text"
                  className="input-email"
                  control={FORM_OPTIONS.INPUT}
                  name="email"
                  label="YOUR EMAIL"
                  placeholder="john@gmail.com"
                />
                <FormikControl
                  type="text"
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
