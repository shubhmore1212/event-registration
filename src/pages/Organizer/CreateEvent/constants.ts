import * as Yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const initialValues = {
  name: "",
  description: "",
  venue: "",
  start_date: "",
  end_date: "",
  start_time: "",
  end_time: "",
  mode: "",
  platform: "",
  status: "open",
  entry_fees: "",
  no_of_tickets: "",
  max_tickets_per_event: "",
};

export const eventValidation = Yup.object({
  name: Yup.string().trim().required(),
  description: Yup.string().trim().required(),
  venue: Yup.string().trim().required(),
  start_date: Yup.date().min(today,"Date cannot be in past").required(),
  end_date: Yup.date().min(today,"Date cannot be in past").required(),
  start_time: Yup.string().trim().required(),
  end_time: Yup.string().trim().required(),
});

export const eventModeValidation = Yup.object({
  mode: Yup.string().trim().required(),
  platform: Yup.string().trim().required(),
});

export const eventTicketValidation = Yup.object({
  entry_fees: Yup.string().trim().required(),
  no_of_tickets: Yup.string().trim().required(),
  max_tickets_per_event: Yup.string().trim().required(),
});

const checkDigit = (num: number) => {
  if (num < 10) {
    return "0" + JSON.stringify(num);
  } else {
    return JSON.stringify(num);
  }
};

export const getCurrentDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  return yyyy + "-" + checkDigit(mm) + "-" + checkDigit(dd);
};