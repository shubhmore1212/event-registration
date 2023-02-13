import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { useCreateEvent } from "../../../../hooks/useQueryHooks";
import {
  eventModeValidation,
  eventTicketValidation,
  eventValidation,
  initialValues,
} from "../constants";
import {
  EventDescForm,
  EventModeForm,
  EventTicketForm,
} from "./EventStepsForm";
import { FormikStep, FormikStepper } from "./FormikStepper";

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

interface IProps {
  initialValues: any;
  onSubmit: any;
}

const CreateEventForm = (props: IProps) => {
  const { initialValues, onSubmit } = props;

  return (
    <FormikStepper initialValues={initialValues} onSubmit={onSubmit}>
      <FormikStep label="Event Information" validationSchema={eventValidation}>
        <EventDescForm />
      </FormikStep>
      <FormikStep label="Event Mode" validationSchema={eventModeValidation}>
        <EventModeForm />
      </FormikStep>
      <FormikStep label="Event Ticket" validationSchema={eventTicketValidation}>
        <EventTicketForm />
      </FormikStep>
    </FormikStepper>
  );
};

export default React.memo(CreateEventForm);
