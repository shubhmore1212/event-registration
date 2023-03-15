import React, { Profiler } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import RegistrantDashboard from "./components";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useGetAllEvent } from "hooks/useQueryHooks";
import UserLayout from "layouts/UserLayout";
import Loader from "shared/components/Loader";

import { ROUTES } from "../../../constants";
import { callback } from "utils/profilerPerfomance";


const RegistrantContainer = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();

  const onSuccess = () => {};

  const onError = (error:any) => {
    toast.warn(error.response?.data);
    navigate(ROUTES.ERROR_500);
  };

  const {
    data: events,
    isLoading,
    isError,
  } = useGetAllEvent({
    onSuccess,
    onError,
    payload: { ...user, accessToken },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    navigate(ROUTES.ERROR_500);
  }

  const navigationHandler = () => {
    navigate(ROUTES.REGISTERED_EVENT);
  };

  const handleNavigation = (event_id: any) => {
    navigate(ROUTES.DISPLAY_EVENT.replace(":event_id",JSON.stringify(event_id)), { replace: false });
  };

  const homeNavigation = () => {
    navigate(ROUTES.REGISTERANT);
  };

  return (
    <Profiler id="registrant-page" onRender={callback}>
    <UserLayout
      isSearchBox={true}
      isRegistrant={true}
      buttonHandler={navigationHandler}
      homeNavigation={homeNavigation}
      userName={user.first_name}
    >
      <RegistrantDashboard
        events={events}
        handleNavigation={handleNavigation}
      />
    </UserLayout>
    </Profiler>
  );
};

export default React.memo(RegistrantContainer);
