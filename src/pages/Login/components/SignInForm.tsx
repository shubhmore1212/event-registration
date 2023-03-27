import React from "react";
import { Formik, Form } from "formik";

import { FormikControl } from "shared/components/FormikControl";

import { FORM_OPTIONS } from "shared/constants";

import { signInPropsType } from "types/form.types";

const SignInForm = (props: signInPropsType) => {
  const { initialValues, validationSchema, handleSubmit } = props;

  return (
    <div data-testid="form-root-div">
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
  );
};

export default SignInForm;
