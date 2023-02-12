import { Form, Formik } from "formik";
import React from "react";
import { FormikControl } from "../../../../shared/components/FormikControl";
import { FORM_OPTIONS } from "../../../../shared/constants";

interface IProps {
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
  event?: any;
  warning?: any;
}

const RegisterForm = (props: IProps) => {
  const { initialValues, validationSchema, onSubmit, warning } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <div className="form-login">
          <Form>
            <div className="signup-form-format">
              <FormikControl
                type="number"
                className="input-password"
                control={FORM_OPTIONS.INPUT}
                name="ticket_bought"
                label={`NO OF TICKETS  ${warning}`}
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
