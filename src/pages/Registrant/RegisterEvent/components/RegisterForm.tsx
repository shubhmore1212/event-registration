import { Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
import * as Yup from "yup";
import { FormikControl } from "../../../../shared/components/FormikControl";
import { FORM_OPTIONS } from "../../../../shared/constants";

const RegisterForm = () => {
  const initialValues = {
    name: "",
    event_type: "",
    start_date: "",
    ticket_bought: "",
  };

  const validationSchema = Yup.object({});

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
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
                name="name"
                label="EVENT NAME"
              />
              <FormikControl
                type="text"
                className="input-password"
                control={FORM_OPTIONS.INPUT}
                name="event_type"
                label="EVENT TYPE"
              />
            </div>
            <div className="signup-form-format">
              <FormikControl
                type="date"
                className="input-contact"
                control={FORM_OPTIONS.INPUT}
                name="start_date"
                label="START DATE"
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
                type="number"
                className="input-password"
                control={FORM_OPTIONS.INPUT}
                name="ticket_bought"
                label="NO OF TICKETS"
              />
            </div>
            <button type="submit" className="log-in-btn">
              Register
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default React.memo(RegisterForm);
