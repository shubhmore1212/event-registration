import { LoginValidationSchemaType } from "constants/formConstants";
import { FormikHelpers } from "formik";

export interface loginType {
  email: string;
  password: string;
}

export interface signInPropsType {
  initialValues: loginType;
  validationSchema: LoginValidationSchemaType;
  handleSubmit: (values: any, actions: FormikHelpers<any>) => void;
}

export interface loginPropsType extends signInPropsType {
  buttonHandler: () => void;
  homeNavigation?: () => void;
}

export type ISignUpFormValues = {
  email: string;
  password: string;
  re_password: string;
  role_id: string;
  first_name: string;
  last_name: string;
  contact_no: string;
};

export interface registerFormProps {
  initialValues: ISignUpFormValues;
  validationSchema: any;
  handleSubmit: (values: any, actions: FormikHelpers<any>) => void;
}

export interface ISignUpFormProps extends registerFormProps {
  buttonHandler: () => void;
  homeNavigation?: () => void;
}
