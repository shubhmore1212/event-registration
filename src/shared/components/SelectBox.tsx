import { ErrorMessage, Field } from "formik";
import { ReactElement } from "react";
import { TextError } from "./TextError";

interface IProps {
  label: string;
  name: string;
  options?: { key: string; value: string }[];
}

export const SelectBox = (props: IProps): ReactElement => {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-container">
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as="select" name={name}>
          <option>Select One</option>
          {options?.map((option) => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
