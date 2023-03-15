import { ErrorMessage, Field } from "formik";
import { ReactElement } from "react";
import { TextError } from "./TextError";

interface IProps {
  label: string;
  name: string;
  type?:
    | "text"
    | "date"
    | "time"
    | "textarea"
    | "select"
    | "email"
    | "password"
    | "number";
}

export const InputBox = (props: IProps): ReactElement => {
  const { name, label, type, ...rest } = props;
  return (
    <div className="form-container">
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field type={type} name={name} {...rest} />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
