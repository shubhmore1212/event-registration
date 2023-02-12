import React from "react";
import RegisterForm from "./RegisterForm";

interface IProps {
  event?: any;
  warning?:any;
  initialValues:any;
  validationSchema:any;
  onSubmit:any;
}

const RegisterFormComponent = (props: IProps) => {
  return <RegisterForm {...props}/>;
};

export default React.memo(RegisterFormComponent);
