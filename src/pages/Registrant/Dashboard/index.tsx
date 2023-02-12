import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";

import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useGetAllEvent } from "../../../hooks/useQueryHooks";
import UserLayout from "../../../layouts/UserLayout";
import RegistrantDashboard from "./components";

const RegistrantContainer = () => {
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

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <div className="error-msg">{error.message}</div>;
  }

  const navigationHandler = () => {
    navigate("/registred-event");
  };

  const handleNavigation = (event_id: any) => {
    navigate(`/display-event/${event_id}`, { replace: false });
  };

  const homeNavigation = () => {
    navigate(ROUTES.REGISTER);
  };

  return (
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
  );
};

export default React.memo(RegistrantContainer);
