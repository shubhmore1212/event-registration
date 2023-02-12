import React from "react";
import { useNavigate } from "react-router-dom";

import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useCreateEvent } from "../../../hooks/useQueryHooks";
import UserLayout from "../../../layouts/UserLayout";
import CreateEventComponent from "./components";

import { initialValues } from "./constants";
import { ROUTES } from "../../../constants";

import "./components/styles/styles.css";
import { toast } from "react-toastify";

const CreateEventContainer = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();

  const onSuccess = () => {
    toast("Event Created Successfully🥳");
    navigate(ROUTES.ORGANIZER);
  };

  const onError = () => {
    toast("Oops! Something went wrogn 🤪");
  };

  const { mutate: createEvent } = useCreateEvent({
    onSuccess,
    onError,
  });

  const onSubmit = (values: any) => {
    createEvent({ ...values, id: user.id, accessToken });
  };

  const homeNavigation = () => {
    navigate(ROUTES.ORGANIZER);
  };

  return (
    <UserLayout homeNavigation={homeNavigation} userName={user.first_name}>
      <CreateEventComponent initialValues={initialValues} onSubmit={onSubmit} />
    </UserLayout>
  );
};

export default React.memo(CreateEventContainer);
