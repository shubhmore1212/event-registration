import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import {
  useCreateEvent,
  useGetEventById,
  useUpdateEvent,
} from "../../../hooks/useQueryHooks";

import UpdateEventComponent from "./components";

const UpdateEventFormContainer = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();
  const { event_id } = useParams();

  const onSuccess = async (values: any) => {
    console.log(values);
    navigate("/organizer");
  };

  const onError = (values: any) => {
    console.log(values);
  };

  const onGetEventSuccess = (values: any) => {
    console.log({ ...values });
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
    return <>Loading...</>;
  }

  if (isError) {
    return <>{error.message}</>;
  }

  return (
    <>
      <UpdateEventComponent initialValues={event} onSubmit={onSubmit} />
    </>
  );
};

export default React.memo(UpdateEventFormContainer);
