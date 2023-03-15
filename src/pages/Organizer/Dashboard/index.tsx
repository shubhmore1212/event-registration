import React, { Profiler } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Loader from "shared/components/Loader";
import OrganizerDashboard from "./components";
import UserLayout from "layouts/UserLayout";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useGetOrganizedEvent } from "hooks/useQueryHooks";

import { ROUTES } from "../../../constants";
import { callback } from "utils/profilerPerfomance";

const OrganizerConatiner = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();

  const navigationHandler = () => {
    navigate(ROUTES.CREATE_EVENT);
  };

  const displayEventHandler = (id: number) => {
    navigate(ROUTES.DISPLAY_EVENT.replace(":event_id", JSON.stringify(id)));
  };

  const onError = (error: any) => {
    toast.warn(error.response?.data);
    navigate(ROUTES.ERROR_404);
  };

  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useGetOrganizedEvent({
    onError,
    payload: { ...user, accessToken },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    navigate(ROUTES.ERROR_500);
  }

  return (
    <Profiler id="organizer-page" onRender={callback}>
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
    </Profiler>
  );
};

export default React.memo(OrganizerConatiner);
