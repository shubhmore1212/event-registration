import React, { Profiler } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import LoginComponent from "./components";
import { useUserLogin } from "hooks/useQueryHooks";

import { errorNavigation } from "utils/errorHandler";
import { capitalizeFirstLetter } from "utils/stringOperations";
import { handleNavigate, stringifyData } from "utils/loginFunction";

import { loginType } from "types/form.types";
import {
  loginInitialValues,
  LoginValidationSchema,
} from "constants/formConstants";
import { ROUTES } from "../../constants";
import { TOKEN, USER } from "./constants";
import { callback } from "utils/profilerPerfomance";

const setLocalStorage = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

const LoginContainer = () => {
  const navigate = useNavigate();

  const onSuccess = (response: any) => {
    const accessToken = response?.headers?.authorization;
    const role_id = response?.data?.status?.data?.role_id;
    const user = response?.data?.status?.data;

    setLocalStorage(TOKEN, accessToken);
    setLocalStorage(USER, stringifyData(user));

    toast(
      `${capitalizeFirstLetter(`${user?.first_name}`)} logged in successfully`
    );
    navigate(handleNavigate(role_id), { replace: true });
  };

  const onError = (error: any) => {
    toast.warn(error.response?.data);
    errorNavigation(navigate, error);
  };

  const { mutate: userLogin } = useUserLogin({ onSuccess, onError });

  const handleSubmit = (values: loginType) => {
    userLogin({ user: { ...values } });
  };

  const imageButtonHandler = () => {
    navigate(ROUTES.SIGNUP, { replace: true });
  };

  const homeNavigation = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Profiler id="login-page" onRender={callback}>
      <LoginComponent
        initialValues={loginInitialValues}
        validationSchema={LoginValidationSchema}
        handleSubmit={handleSubmit}
        buttonHandler={imageButtonHandler}
        homeNavigation={homeNavigation}
      />
    </Profiler>
  );
};

export default React.memo(LoginContainer);
