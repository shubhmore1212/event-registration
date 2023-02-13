import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import {
  useCreateEvent,
  useGetOrganizedEvent,
} from "../../../hooks/useQueryHooks";
import UserLayout from "../../../layouts/UserLayout";

import CreateEventComponent from "./components";

import "./components/styles/styles.css";
import { initialValues } from "./constants";

const CreateEventContainer = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();

  const onSuccess = async (values: any) => {
    console.log(values);
    navigate("/organizer");
  };

  const onError = (values: any) => {
    console.log(values);
  };

  const { mutate: createEvent } = useCreateEvent({
    onSuccess,
    onError,
  });

  const onSubmit = async (values: any) => {
    createEvent({ ...values, id: user.id, accessToken });
  };

 

  return (
    <UserLayout>
      <CreateEventComponent initialValues={initialValues} onSubmit={onSubmit} />
    </UserLayout>
  );
};

export default React.memo(CreateEventContainer);
