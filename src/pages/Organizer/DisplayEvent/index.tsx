import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useGetEventById } from "../../../hooks/useQueryHooks";
import UserLayout from "../../../layouts/UserLayout";

import DisplayEventComponent from "./components";

const DisplayEventContainer = () => {
  const navigate = useNavigate();
  const { event_id } = useParams();
  const { user, accessToken } = useCurrentUser();
  const { role_id } = user;
  const buttonName1 = role_id === 1 ? "BOOK NOW" : "UPDATE";
  const buttonName2 = role_id === 1 ? "SHARE" : "DELETE";

  const buttonName1Handler = (id: number) => {
    switch (role_id) {
      case 1: //registrant
        navigate(`/register-form/${id}`);
        return;
      case 2: //organizer
        navigate(`/update-form/${id}`);
        return;
      case 3: //admin
        navigate("/");
        return;
      default:
        navigate("/error-404");
        return;
    }
  };

  const buttonName2Handler = () => {
    switch (role_id) {
      case 1: //registrant
        console.log("registrant");
        return;
      case 2: //organizer
        console.log("organizer");
        return;
      case 3: //admin
        console.log("admin");
        return;
      default:
        navigate("/error-404");
        return;
    }
  };

  const onSuccess = (values: any) => {
    console.log("Success", values);
  };

  const onError = (error: any) => {
    console.log("Success", error);
  };

  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useGetEventById({
    onSuccess,
    onError,
    payload: { id: event_id, accessToken },
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <div className="error-msg">{error.message}</div>;
  }

  console.log("events", event);

  return (
    <UserLayout>
      <DisplayEventComponent
        event={event}
        role_id={user.role_id}
        buttonName1={buttonName1}
        buttonName2={buttonName2}
        buttonName1Handler={buttonName1Handler}
        buttonName2Handler={buttonName2Handler}
      />  
    </UserLayout>
  );
};

export default React.memo(DisplayEventContainer);
