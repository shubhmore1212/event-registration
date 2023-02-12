import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import LoginComponent from "./components";
import { useUserLogin } from "../../hooks/useQueryHooks";

import { handleNavigate, setLocalStorageUser } from "../../utils/loginFunction";
import { capitalizeFirstLetter } from "../../utils/stringOperations";

import {
  loginInitialValues,
  LoginValidationSchema,
} from "../../constants/formConstants";
import { ROUTES } from "../../constants";
import { loginType } from "../../types/form.types";

const LoginContainer = () => {
  const navigate = useNavigate();

  const onSuccess = (response: any) => {
    const accessToken = response?.headers?.authorization;
    const role_id = response?.data?.status?.data?.role_id;
    const user = response?.data?.status?.data;

    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", setLocalStorageUser(user));

    toast(`${capitalizeFirstLetter(`${user?.first_name}`)} logged in successfully`)
    navigate(handleNavigate(role_id), { replace: true });
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

  const onError = (error: any) => {
    errorNavigation(error);
  };

  const { mutate: userLogin } = useUserLogin({ onSuccess, onError });

  const handleSubmit = async (values: loginType) => {
    userLogin({ user: { ...values } });
  };

  const imageButtonHandler = () => {
    navigate(ROUTES.SIGNUP, { replace: true });
  };

  const homeNavigation = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <LoginComponent
      initialValues={loginInitialValues}
      validationSchema={LoginValidationSchema}
      handleSubmit={handleSubmit}
      buttonHandler={imageButtonHandler}
      homeNavigation={homeNavigation}
    />
  );
};

export default React.memo(LoginContainer);
