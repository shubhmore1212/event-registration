import { InputBox } from "./InputBox";
import { SelectBox } from "./SelectBox";

import { FORM_OPTIONS } from "../constants";

const { INPUT, SELECT_BOX } = FORM_OPTIONS;

interface IProps {
  control: string;
  type?:
    | "text"
    | "date"
    | "time"
    | "textarea"
    | "select"
    | "email"
    | "password"
    | "number";
  name: string;
  label: string;
  className?: string;
  id?: string;
  style?: string;
  disabled?: boolean;
  placeholder?: string;
  options?: { key: string; value: string }[];
}

export const FormikControl = (props: IProps) => {
  const { control, ...rest } = props;
  switch (control) {
    case INPUT:
      return <InputBox {...rest} />;
    case SELECT_BOX:
      return <SelectBox {...rest} />;
    default:
      return <div>Invalid Entry of Formik</div>;
  }
};
