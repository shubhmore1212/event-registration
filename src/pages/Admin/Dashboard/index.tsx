import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminDashboard from "./components";
import {
  useGetAllCounts,
  useGetAllEvent,
  useGetAllUsers,
} from "hooks/useQueryHooks";
import { useCurrentUser } from "hooks/useCurrentUser";
import UserLayout from "layouts/UserLayout";
import Loader from "shared/components/Loader";

import { ROUTES } from "../../../constants";
import { toast } from "react-toastify";

const AdminContainer = () => {
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();
  const [state, setState] = useState<boolean>(true);

  const toggleState = () => {
    setState(!state);
  };

  const onError = (error:any) => {
    toast.warn(error.response?.data);
    navigate(ROUTES.ERROR_500);
  };

  const {
    data: events,
    isLoading,
    isError,
  } = useGetAllEvent({
    onError,
    payload: { ...user, accessToken },
  });

  const {
    data: users,
    isLoading: isUserLoading,
    isError: isUserError,
    error: userError,
  } = useGetAllUsers({
    onError,
    payload: { ...user, accessToken },
  });

  const {
    data: counts,
    isLoading: isCountLoading,
    isError: isCountError,
    error: countError,
  } = useGetAllCounts({
    onError,
    payload: { ...user, accessToken },
  });

  if (isLoading || isCountLoading || isUserLoading) {
    return <Loader />;
  }

  if (isError) {
    navigate(ROUTES.ERROR_404);
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
        counts={counts}
      />
    </UserLayout>
  );
};

export default React.memo(AdminContainer);
