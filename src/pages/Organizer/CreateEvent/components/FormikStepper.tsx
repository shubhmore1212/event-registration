import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Step, StepLabel, Stepper } from "@mui/material";

export const FormikStep = ({ children }: any) => {
  return <>{children}</>;
};

export const FormikStepper = ({ children, ...props }: any) => {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<any>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  return (
    <>
      <Formik
        {...props}
        validationSchema={currentChild?.props?.validationSchema}
        onSubmit={async (values: any, helpers: any) => {
          if (isLastStep()) {
            await props.onSubmit(values, helpers);
          } else {
            setStep((s) => s + 1);
          }
        }}
      >
        {({ isSubmitting }: any) => (
          <Form autoComplete="off">
            <Stepper activeStep={step} alternativeLabel>
              {childrenArray.map((child) => (
                <Step key={child.props.label}>
                  <StepLabel>{child.props.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {currentChild}
            {step > 0 ? (
              <button
                className="back-btn"
                disabled={isSubmitting}
                type="button"
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </button>
            ) : null}
            <button className="next-btn" disabled={isSubmitting} type="submit">
              {isSubmitting
                ? "Submitting..."
                : isLastStep()
                ? "Submit"
                : "Next"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
