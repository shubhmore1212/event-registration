import { FormikHelpers } from "formik";

export interface loginType {
  email: string;
  password: string;
}

export interface loginPropsType {
  initialValues: loginType;
  validationSchema: any;
  handleSubmit: (values: any, actions: FormikHelpers<any>) => void;
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

export interface ISignUpFormProps {
  initialValues: ISignUpFormValues;
  validationSchema: any;
  handleSubmit: (values: any, actions: FormikHelpers<any>) => void;
  buttonHandler: () => void;
  homeNavigation?: () => void;
}
