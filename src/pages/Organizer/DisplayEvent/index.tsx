import React, { lazy, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import Loader from "shared/components/Loader";
import DisplayEventComponent from "./components";
import CustomModal from "shared/components/CustomModal";
import {
  useDeleteEvent,
  useGetEventById,
  useRegisterEvent,
} from "hooks/useQueryHooks";
import UserLayout from "layouts/UserLayout";
import { useCurrentUser } from "hooks/useCurrentUser";

import { getButtonName } from "utils/displayEvents";

import { ROUTES } from "../../../constants";

const RegisterFormComponent = lazy(
  () => import("pages/Registrant/RegisterEvent/components")
);

const DisplayEventContainer = () => {
  const navigate = useNavigate();
  const { event_id } = useParams();
  const { user, accessToken } = useCurrentUser();
  const { role_id } = user;
  const button = getButtonName(role_id);
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const buttonName1Handler = (id: number) => {
    switch (role_id) {
      case 1: //registrant
        toggleModal();
        return;
      case 2: //organizer
        navigate(ROUTES.UPDATE_EVENT.replace(":event_id", JSON.stringify(id)));
        return;
      case 3: //admin
        deleteEvent({ id: event_id, accessToken });
        navigate(ROUTES.ADMIN);
        return;
      default:
        navigate(ROUTES.ERROR_404);
        return;
    }
  };

  const onDeleteError = (error: any) => {
    toast.warn(error.response?.data);
    navigate(ROUTES.ERROR_500);
  };

  const { mutate: deleteEvent } = useDeleteEvent({
    onError: onDeleteError,
  });

  const buttonName2Handler = () => {
    switch (role_id) {
      case 1: //registrant
        return;
      case 2: //organizer
        deleteEvent({ id: event_id, accessToken });
        navigate(ROUTES.ORGANIZER);
        return;
      case 3: //admin
        return;
      default:
        navigate(ROUTES.ERROR_404);
        return;
    }
  };

  const {
    data: event,
    isLoading,
    isError,
  } = useGetEventById({
    payload: { id: event_id, accessToken },
  });

  const onRegisterSuccess = () => {
    toggleModal();
    toast("Hurray! you registred successfully 🥳");
    navigate(
      ROUTES.DISPLAY_EVENT.replace(":event_id", JSON.stringify(event_id))
    );
  };

  const onRegisterError = () => {
    toast("Oops! Something went wrogn 🤪");
  };

  const { mutate: createEvent } = useRegisterEvent({
    onSuccess: onRegisterSuccess,
    onError: onRegisterError,
  });

  const registrationInitialValues = {
    user_id: user.id,
    event_id: event_id,
    ticket_bought: "",
  };

  const registrationValidationSchema = Yup.object({
    ticket_bought: Yup.number()
      .min(1, "Tickets cannot be less than 1")
      .max(
        event?.max_tickets_per_event,
        `Cannot select more than ${event?.max_tickets_per_event}`
      )
      .required("Please Enter Valid Number"),
  });

  const onSubmit = (values: any) => {
    createEvent({ user_event: values, accessToken });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    navigate(ROUTES.ERROR_404);
  }

  const homeNavigation = () => {
    switch (role_id) {
      case 1:
        navigate(ROUTES.REGISTERANT);
        return;
      case 2:
        navigate(ROUTES.ORGANIZER);
        return;
      case 3:
        navigate(ROUTES.ADMIN);
        return;
      default:
        navigate(ROUTES.HOME);
        return;
    }
  };

  return (
    <UserLayout homeNavigation={homeNavigation} userName={user.first_name}>
      <DisplayEventComponent
        event={event}
        role_id={user.role_id}
        button={button}
        buttonName1Handler={buttonName1Handler}
        buttonName2Handler={buttonName2Handler}
      />
      <CustomModal
        heading="Make Sure to have fun! 🥳"
        event={event}
        childComponent={
          <RegisterFormComponent
            warning={`(One Can Book Only ${event.max_tickets_per_event} Tickets)`}
            initialValues={registrationInitialValues}
            validationSchema={registrationValidationSchema}
            onSubmit={onSubmit}
          />
        }
        open={open}
        toggleModal={toggleModal}
      />
    </UserLayout>
  );
};

export default React.memo(DisplayEventContainer);
