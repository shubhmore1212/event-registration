import React from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";

import SignUpComponent from "./components";
import { useAddUser } from "../../hooks/useQueryHooks";

import {
  SignUpInitialValues,
  signUpValidationSchema,
} from "../../constants/formConstants";
import { ROUTES } from "../../constants";
import { toast } from "react-toastify";
import { capitalizeFirstLetter } from "../../utils/stringOperations";

const SignUpContainer = () => {
  const navigate = useNavigate();

  const onSuccess = (values:any) => {
    toast(`${capitalizeFirstLetter(`${values.first_name}`)},GO Login and Experience Event Like Never Before`)
    navigate(ROUTES.LOGIN, { replace: true });
  };

  const onError = (error: any) => {
    errorNavigation(error);
  };

  const { mutate: addUser } = useAddUser({ onSuccess, onError });

  const handleSubmit = async (values: any, actions: FormikHelpers<any>) => {
    try {
      addUser({ user: { ...values } });
      actions.resetForm();
    } catch (error: any) {
      errorNavigation(error);
    }
  };

  const errorNavigation = (error: any) => {
    switch (error.response?.status) {
      case 400:
        navigate(ROUTES.ERROR_400, { replace: true });
        return;
      case 401:
        navigate(ROUTES.ERROR_401, { replace: true });
        return;
      case 422:
        navigate(ROUTES.ERROR_422, { replace: true });
        return;
      case 404:
        navigate(ROUTES.ERROR_404, { replace: true });
        return;
      default:
        navigate(ROUTES.ERROR_500, { replace: true });
        return;
    }
  };

  const imageButtonHandler = () => {
    navigate(ROUTES.LOGIN, { replace: true });
  };

  const homeNavigation = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <SignUpComponent
      initialValues={SignUpInitialValues}
      validationSchema={signUpValidationSchema}
      handleSubmit={handleSubmit}
      buttonHandler={imageButtonHandler}
      homeNavigation={homeNavigation}
    />
  );
};

export default React.memo(SignUpContainer);
