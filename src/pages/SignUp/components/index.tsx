import React from "react";

import SignUpLayout from "./Layout";

import { ISignUpFormProps } from "../../../types/form.types";

const SignUpComponent: React.FC<ISignUpFormProps> = (props) => {
  return <SignUpLayout {...props} />;
};

export default React.memo(SignUpComponent);
