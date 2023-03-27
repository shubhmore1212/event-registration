import * as Yup from "yup";
import "yup-phone";
import { OptionalObjectSchema } from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";
import { AnyObject } from "yup/lib/types";

interface SignUpType {
  first_name: string;
  last_name: string;
  contact_no: string;
  role_id: string;
  email: string;
  password: string;
  re_password: string;
}

export const SignUpInitialValues: SignUpType = {
  first_name: "",
  last_name: "",
  contact_no: "",
  role_id: "",
  email: "",
  password: "",
  re_password: "",
};

export type signUpValidationSchemaType = OptionalObjectSchema<{
  first_name: RequiredStringSchema<string | undefined, AnyObject>;
  last_name: RequiredStringSchema<string | undefined, AnyObject>;
  contact_no: RequiredStringSchema<string | undefined, AnyObject>;
  role_id: RequiredStringSchema<string | undefined, AnyObject>;
  email: RequiredStringSchema<string | undefined, AnyObject>;
  password: RequiredStringSchema<string | undefined, AnyObject>;
  re_password: Yup.StringSchema<
    string | undefined,
    AnyObject,
    string | undefined
  >;
}>;

export const signUpValidationSchema:signUpValidationSchemaType = Yup.object({
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
interface loginType {
  email: string;
  password: string;
}

export type LoginValidationSchemaType = OptionalObjectSchema<{
  email: RequiredStringSchema<string | undefined, AnyObject>;
  password: RequiredStringSchema<string | undefined, AnyObject>;
}>;

export const loginInitialValues: loginType = {
  email: "",
  password: "",
};

export const LoginValidationSchema: LoginValidationSchemaType = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .trim()
    .required("Required"),
  password: Yup.string().trim().required("Required"),
});

/* end login form */
