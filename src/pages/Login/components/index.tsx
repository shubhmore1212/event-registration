import React from "react";
import { FormikHelpers } from "formik";

import LoginLayout from "./Layout";

interface IProps {
  initialValues: { email: string; password: string };
  validationSchema:any;
  handleSubmit: (values: any, actions: FormikHelpers<any>) => void;
}

const LoginComponent: React.FC<IProps> = (props) => {
  return <LoginLayout {...props}/>;
};

export default React.memo(LoginComponent);
