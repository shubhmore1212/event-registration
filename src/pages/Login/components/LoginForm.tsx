import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

import Logo from "../../../layouts/Logo";
import LoginContent from "../components/ui/LoginContent";
import { FormikControl } from "../../../shared/components/FormikControl";
import useAuth from "../../../hooks/useAuth";

import axios from "../../../services/api/axios";

import { FORM_OPTIONS } from "../../../shared/constants";

import "./styles/styles.css";

const LOGIN_URL = "/users/sign_in";

interface IProps {
  initialValues: { email: string; password: string };
  validationSchema: any;
  handleSubmit: (values: any, actions: FormikHelpers<any>) => void;
}

const LoginForm: React.FC<IProps> = (props) => {
  const { initialValues, validationSchema, handleSubmit } =
    props;
  // const { setAuth } = useAuth();
  // const navigate = useNavigate();

  // const handleSubmit = async (values: any) => {
  //   try {
  //     const response = await axios.post(
  //       LOGIN_URL,
  //       JSON.stringify({
  //         user: {
  //           ...values,
  //         },
  //       }),
  //       {
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     console.log(response);
  //     //status:code,message,data
  //     const accessToken = response?.headers?.authorization;
  //     const role_id = response?.data?.status?.data?.role_id;
  //     const user = response?.data?.status?.data;
  //     const statusCode = response?.data?.status?.code;
  //     console.log(
  //       "Access Token",
  //       accessToken,
  //       "Role Id",
  //       role_id,
  //       "User",
  //       user,
  //       "Status",
  //       statusCode
  //     );
  //     setAuth({ user, roles: [role_id], accessToken });
  //     navigate(handleNavigate(role_id), { replace: true });
  //   } catch (error: any) {
  //     if (!error?.response) {
  //       console.log("No Server Response");
  //     } else if (error.response?.status === 400) {
  //       console.log("Missing Username and Password");
  //     } else if (error.response?.status === 401) {
  //       console.log("Unauthorized");
  //     } else {
  //       console.log("Login Failed");
  //     }
  //   }
  // };

  // const initialValues = {
  //   email: "",
  //   password: "",
  // };

  // const validationSchema = Yup.object({
  //   email: Yup.string().trim().required("Required"),
  //   password: Yup.string().trim().required("Required"),
  // });

  // const handleNavigate = (roleId: number) => {
  //   console.log(roleId);
  //   switch (roleId) {
  //     case 1:
  //       return "/register";
  //     case 2:
  //       return "/organizer";
  //     case 3:
  //       return "/admin";
  //     default:
  //       return "/";
  //   }
  // };

  return (
    <>
      <Logo id="login-heading" />
      <div className="login-content">
        <LoginContent />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <div className="form-login">
              <Form>
                <FormikControl
                  className="input-email"
                  control={FORM_OPTIONS.INPUT}
                  name="email"
                  label="YOUR EMAIL"
                  placeholder="john@gmail.com"
                />
                <FormikControl
                  className="input-password"
                  control={FORM_OPTIONS.INPUT}
                  name="password"
                  label="PASSWORD"
                  placeholder="5+ characters"
                />
                <button type="submit" className="log-in-btn">
                  Log In
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default React.memo(LoginForm);
