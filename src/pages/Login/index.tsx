import React from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";

import LoginComponent from "./components";

import { useUserLogin } from "../../hooks/useQueryHooks";

const setLocalStorageUser = (user: any) => {
  return JSON.stringify(user);
};

const handleNavigate = (roleId: number) => {
  switch (roleId) {
    case 1:
      return "/register";
    case 2:
      return "/organizer";
    case 3:
      return "/admin";
    default:
      return "/";
  }
};

const LoginContainer = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter valid email")
      .trim()
      .required("Required"),
    password: Yup.string().trim().required("Required"),
  });

  const onSuccess = (response: any) => {
    const accessToken = response?.headers?.authorization;
    const role_id = response?.data?.status?.data?.role_id;
    const user = response?.data?.status?.data;

    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", setLocalStorageUser(user));

    navigate(handleNavigate(role_id), { replace: true });
  };

  const onError = (error: any) => {
    if (!error?.response) {
      navigate("/error-500", { replace: true });
    } else if (error.response?.status === 400) {
      navigate("/error-400", { replace: true });
    } else if (error.response?.status === 401) {
      navigate("/error-401", { replace: true });
    } else {
      navigate("/error-404", { replace: true });
    }
  };

  const { mutate: userLogin } = useUserLogin({ onSuccess, onError });

  const handleSubmit = async (values: any, actions: FormikHelpers<any>) => {
    userLogin({ user: { ...values } });
  };

  const imageButtonHandler = () => {
    navigate("/signup", { replace: true });
  };

  return (
    <LoginComponent
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      buttonHandler={imageButtonHandler}
    />
  );
};

export default React.memo(LoginContainer);
