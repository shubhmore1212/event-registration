import React from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as Yup from "yup";
import "yup-phone";

import SignUpComponent from "./components";
import { useQueryClient } from "react-query";
import { useAddUser } from "../../hooks/useQueryHooks";

const SIGNUP_URL = "/signup";

const setLocalStorageUser = (user: any) => {
  return JSON.stringify(user);
};

const getLocalStorageUser = (user: string) => {
  return JSON.parse(user);
};

const SignUpContainer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onSuccess = () => {
    navigate("/login", { replace: true });
  };

  const onError = (error: any) => {
    console.log(error.response?.status);
    if (!error?.response) {
      navigate("/error-500", { replace: true });
    } else if (error.response?.status === 400) {
      navigate("/error-400", { replace: true });
    } else if (error.response?.status === 401) {
      navigate("/error-401", { replace: true });
    } else if (error.response?.status === 422) {
      navigate("/error-422", { replace: true });
    } else {
      navigate("/error-404", { replace: true });
    }
  };

  const { mutate: addUser } = useAddUser({ onSuccess, onError });

  const initialValues = {
    first_name: "",
    last_name: "",
    contact_no: "",
    role_id: "",
    email: "",
    password: "",
    re_password: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().trim().required("Required"),
    last_name: Yup.string().trim().required("Required"),
    contact_no: Yup.string()
      .phone("IN", true, "Please Enter valid number")
      .required("Required"),
    role_id: Yup.string()
      .notOneOf(["Select One"], "Please select the role")
      .required("Required"),
    email: Yup.string().trim().required("Required"),
    password: Yup.string().trim().required("Required"),
    re_password: Yup.string().when("password", {
      is: (val: any) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  const handleSubmit = async (values: any, actions: FormikHelpers<any>) => {
    try {
      console.log(values);
      addUser({ user: { ...values } });
      actions.resetForm();
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

  const imageButtonHandler = () => {
    navigate("/login", { replace: true });
  };

  return (
    <SignUpComponent
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      buttonHandler={imageButtonHandler}
    />
  );
};

export default React.memo(SignUpContainer);
