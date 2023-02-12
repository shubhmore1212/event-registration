import React from "react";
import { useNavigate } from "react-router-dom";
import UserLayout from "../../../layouts/UserLayout";
import OrganizerDashboard from "./components";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useGetOrganizedEvent } from "../../../hooks/useQueryHooks";

import { ROUTES } from "../../../constants";

const OrganizerConatiner = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();

  const navigationHandler = () => {
    navigate(ROUTES.CREATE_EVENT);
  };

  const displayEventHandler = (id: number) => {
    navigate(`/display-event/${id}`);
  };

  const onSuccess = (values: any) => {
    console.log("Success", values);
  };

  const onError = (error: any) => {
    console.log("Success", error);
  };

  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useGetOrganizedEvent({
    onSuccess,
    onError,
    payload: { ...user, accessToken },
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <div className="error-msg">{error.message}</div>;
  }

  return (
    <UserLayout
      isSearchBox={true}
      isOrganizer={true}
      buttonHandler={navigationHandler}
      userName={user.first_name}
    >
      <OrganizerDashboard
        events={events}
        displayEventHandler={displayEventHandler}
      />
    </UserLayout>
  );
};

export default React.memo(OrganizerConatiner);
