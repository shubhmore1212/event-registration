import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminDashboard from "./components";
import { useGetAllEvent, useGetAllUsers } from "../../../hooks/useQueryHooks";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import UserLayout from "../../../layouts/UserLayout";

import { ROUTES } from "../../../constants";

const AdminContainer = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();
  const [state, setState] = useState<boolean>(true);

  const toggleState = () => {
    setState(!state);
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
  } = useGetAllEvent({
    onSuccess,
    onError,
    payload: { ...user, accessToken },
  });

  const {
    data: users,
    isLoading: isUserLoading,
    isError: isUserError,
    error: userError,
  } = useGetAllUsers({
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

  const homeNavigation = () => {
    navigate(ROUTES.ADMIN);
  };

  return (
    <UserLayout
      isSearchBox={false}
      isAdmin={true}
      homeNavigation={homeNavigation}
      userName={user.first_name}
    >
      <AdminDashboard
        state={state}
        toggleState={toggleState}
        events={events}
        users={users}
      />
    </UserLayout>
  );
};

export default React.memo(AdminContainer);
