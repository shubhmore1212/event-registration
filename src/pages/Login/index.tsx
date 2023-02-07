import React from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";

import LoginComponent from "./components";
import useAuth from "../../hooks/useAuth";

import axios from "../../services/api/axios";

const LOGIN_URL = "/users/sign_in";

const LoginContainer = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().trim().required("Required"),
    password: Yup.string().trim().required("Required"),
  });

  const handleNavigate = (roleId: number) => {
    console.log(roleId);
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

  const handleSubmit = async (values: any, actions: FormikHelpers<any>) => {
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          user: {
            ...values,
          },
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const accessToken = response?.headers?.authorization;
      const role_id = response?.data?.status?.data?.role_id;
      const user = response?.data?.status?.data;

      setAuth({ user, roles: [role_id], accessToken });
      navigate(handleNavigate(role_id), { replace: true });
    } catch (error: any) {
      if (!error?.response) {
        console.log("No Server Response");
      } else if (error.response?.status === 400) {
        console.log("Missing Username and Password");
      } else if (error.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }
  };

  return (
    <LoginComponent
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
    />
  );
};

export default React.memo(LoginContainer);
