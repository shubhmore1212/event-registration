import React, { Profiler } from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { toast } from "react-toastify";

import SignUpComponent from "./components";
import { useAddUser } from "hooks/useQueryHooks";

import { capitalizeFirstLetter } from "utils/stringOperations";
import { errorNavigation } from "utils/errorHandler";

import {
  SignUpInitialValues,
  signUpValidationSchema,
} from "constants/formConstants";
import { ROUTES } from "../../constants";
import { callback } from "utils/profilerPerfomance";

const SignUpContainer = () => {
  const navigate = useNavigate();

  const onSuccess = (values: any) => {
    let name = capitalizeFirstLetter(values?.data?.data?.first_name);
    toast(`${name},GO Login and Experience Event Like Never Before`);
    navigate(ROUTES.LOGIN, { replace: true });
  };

  const onError = (error: any) => {
    toast.warn(error.response?.data);
    errorNavigation(navigate, error);
  };

  const { mutate: addUser } = useAddUser({ onSuccess, onError });

  const handleSubmit = (values: any, actions: FormikHelpers<any>) => {
    addUser({ user: { ...values } });
    actions.resetForm();
  };

  const imageButtonHandler = () => {
    navigate(ROUTES.LOGIN, { replace: true });
  };

  const homeNavigation = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Profiler id="signup-page" onRender={callback}>
      <SignUpComponent
        initialValues={SignUpInitialValues}
        validationSchema={signUpValidationSchema}
        handleSubmit={handleSubmit}
        buttonHandler={imageButtonHandler}
        homeNavigation={homeNavigation}
      />
    </Profiler>
  );
};

export default React.memo(SignUpContainer);
