import { FormikHelpers } from "formik";
import * as Yup from "yup";
import "yup-phone";

export const SignUpInitialValues = {
  first_name: "",
  last_name: "",
  contact_no: "",
  role_id: "",
  email: "",
  password: "",
  re_password: "",
};

export const signUpValidationSchema = Yup.object({
  first_name: Yup.string().trim().required("Required*"),
  last_name: Yup.string().trim().required("Required*"),
  contact_no: Yup.string()
    .phone("IN", true, "Please Enter valid number")
    .required("Required*"),
  role_id: Yup.string()
    .notOneOf(["Select One"], "Please select the role")
    .required("Required*"),
  email: Yup.string()
    .email("Please Enter a valid email address")
    .trim()
    .required("Required*"),
  password: Yup.string()
    .trim()
    .min(5, "Password must be atleat 5 characters long")
    .required("Required*"),
  re_password: Yup.string().when("password", {
    is: (val: any) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

/* login form */
export const loginInitialValues = {
  email: "",
  password: "",
};

export const LoginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .trim()
    .required("Required"),
  password: Yup.string().trim().required("Required"),
});

/* end login form */
