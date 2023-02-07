import { DatePicker } from "./DatePicker";
import { InputBox } from "./InputBox";
import { TextArea } from "./TextArea";

import { FORM_OPTIONS } from "../constants";

const { INPUT, TEXTAREA, DATE } = FORM_OPTIONS;

interface IProps {
  control: string;
  name: string;
  label: string;
  className?: string;
  id?: string;
  style?: string;
  disabled?: boolean;
  placeholder?:string;
}

export const FormikControl = (props: IProps) => {
  const { control, ...rest } = props;
  switch (control) {
    case INPUT:
      return <InputBox {...rest} />;
    case TEXTAREA:
      return <TextArea {...rest} />;
    case DATE:
      return <DatePicker {...rest} />;
    default:
      return <div>Invalid Entry of Formik</div>;
  }
};
