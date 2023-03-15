import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Loader from "shared/components/Loader";
import UpdateEventComponent from "./components";
import UserLayout from "layouts/UserLayout";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useGetEventById, useUpdateEvent } from "hooks/useQueryHooks";

import { ROUTES } from "../../../constants";

const UpdateEventFormContainer = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();
  const { event_id } = useParams();

  const onSuccess = (values: any) => {
    toast("Event updated successfully 🥳")
    navigate(ROUTES.ORGANIZER);
  };

  const onError = (values: any) => {
    toast("Oops! Something went wrogn 🤪");
  };

  const onGetEventSuccess = (values: any) => {
  };

  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useGetEventById({
    onSuccess: onGetEventSuccess,
    onError,
    payload: { id: event_id, accessToken },
  });

  const { mutate: updateEvent } = useUpdateEvent({
    onSuccess,
    onError,
  });

  const onSubmit = async (values: any) => {
    updateEvent({ ...values, id: event_id, accessToken });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <>{error.message}</>;
  }

  return (
    <UserLayout userName={user.first_name}>
      <UpdateEventComponent initialValues={event} onSubmit={onSubmit} />
    </UserLayout>
  );
};

export default React.memo(UpdateEventFormContainer);
