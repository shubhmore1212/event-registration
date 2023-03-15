import React from "react";
import { useNavigate } from "react-router-dom";

import OrganizerDashboard from "pages/Organizer/Dashboard/components";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useGetAllRegistredEvent } from "hooks/useQueryHooks";
import UserLayout from "layouts/UserLayout";

import { ROUTES } from "../../../constants";

const DisplayRegisteredEvents = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();
  const onSuccess = () => {};

  const onError = () => {
    navigate(ROUTES.ERROR_500);
  };

  const { data: events } = useGetAllRegistredEvent({
    onSuccess,
    onError,
    payload: { id: 8, ...user, accessToken },
  });

  const handleNavigation = (event_id: number) => {
    navigate(
      ROUTES.DISPLAY_EVENT.replace(":event_id", JSON.stringify(event_id)),
      { replace: false }
    );
  };

  const homeNavigation = () => {
    navigate(ROUTES.REGISTERANT);
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
