import React from "react";

import LoginLayout from "./Layout";

import { loginPropsType } from "types/form.types";

const LoginComponent: React.FC<loginPropsType> = (props) => {
  return <LoginLayout {...props} />;
};

export default React.memo(LoginComponent);
