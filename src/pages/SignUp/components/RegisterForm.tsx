import React from "react";
import { Form, Formik } from "formik";

import { FormikControl } from "shared/components/FormikControl";

import { registerFormProps } from "types/form.types";

import { FORM_OPTIONS } from "shared/constants";
import { ROLES } from "constants/constants";


const RegisterForm = (props: registerFormProps) => {
  const { initialValues, validationSchema, handleSubmit } = props;

  return (
    <div data-testid="register-form-root-div">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <div className="form-login">
          <Form autoComplete="off">
            <div className="signup-form-format">
              <FormikControl
                type="text"
                className="input-email"
                control={FORM_OPTIONS.INPUT}
                name="first_name"
                label="FIRST NAME"
                placeholder="John"
              />
              <FormikControl
                type="text"
                className="input-password"
                control={FORM_OPTIONS.INPUT}
                name="last_name"
                label="LAST NAME"
                placeholder="Fernandes"
              />
            </div>
            <div className="signup-form-format">
              <FormikControl
                type="text"
                className="input-contact"
                control={FORM_OPTIONS.INPUT}
                name="contact_no"
                label="CONTACT"
                placeholder="90087654230"
              />
              <FormikControl
                className="roles-select-box"
                control={FORM_OPTIONS.SELECT_BOX}
                name="role_id"
                label="ROLE"
                options={ROLES}
              />
            </div>
            <FormikControl
              type="email"
              className="input-email"
              control={FORM_OPTIONS.INPUT}
              name="email"
              label="EMAIL"
              placeholder="john@gmail.com"
            />
            <div className="signup-form-format">
              <FormikControl
                type="password"
                className="input-password"
                control={FORM_OPTIONS.INPUT}
                name="password"
                label="PASSWORD"
                placeholder="******"
              />
              <FormikControl
                type="password"
                className="input-password"
                control={FORM_OPTIONS.INPUT}
                name="re_password"
                label="RE-ENTER PASSWORD"
                placeholder="******"
              />
            </div>
            <button type="submit" className="log-in-btn">
              Sign Up
            </button>
          </Form>
        </div>
      )}
    </Formik>
    </div>
  );
};

export default React.memo(RegisterForm);
