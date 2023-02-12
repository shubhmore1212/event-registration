import React from "react";

import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useGetAllEvent } from "../../../hooks/useQueryHooks";
import OrganizerDashboard from "../../Organizer/Dashboard/components";
import UserLayout from "../../../layouts/UserLayout";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";

const DisplayRegisteredEvents = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();
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
  } = useGetAllEvent({
    onSuccess,
    onError,
    payload: { ...user, accessToken },
  });

  const handleNavigation = (event_id: number) => {
    navigate(`/display-event/${event_id}`, { replace: false });
  };

  const homeNavigation = () => {
    navigate(ROUTES.REGISTER);
  };

  return (
    <UserLayout homeNavigation={homeNavigation} userName={user.first_name}>
      <OrganizerDashboard
        events={events}
        displayEventHandler={handleNavigation}
      />
    </UserLayout>
  );
};

export default React.memo(DisplayRegisteredEvents);
