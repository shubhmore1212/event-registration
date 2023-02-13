import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import Logo from "../../../layouts/Logo";
import CredentialContent from "../../../layouts/ui/CredentialContent";
import { FormikControl } from "../../../shared/components/FormikControl";
import { FORM_OPTIONS } from "../../../shared/constants";
import { ISignUpFormProps } from "../constants";
import "./styles/styles.css";

const ROLES = [
  {
    key: "1",
    value: "Registrant",
  },
  {
    key: "2",
    value: "Organizer",
  },
];

const SignUpForm: React.FC<ISignUpFormProps> = (props) => {
  const { initialValues, validationSchema, handleSubmit } = props;

  return (
    <>
      <Logo id="login-heading" />
      <div className="login-content">
        <CredentialContent
          heading="Create Account"
          paragraph={`A few clicks away from enjoying the events you enjoyed never before!`}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <div className="form-login">
              <Form>
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
                    placeholder="+91-90087654230"
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
    </>
  );
};

export default React.memo(SignUpForm);
