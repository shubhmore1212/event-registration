import React, { useState } from "react";

import AdminDashboard from "./components";

import { useGetAllEvent } from "../../../hooks/useQueryHooks";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import UserLayout from "../../../layouts/UserLayout";

const AdminContainer = () => {
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

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <div className="error-msg">{error.message}</div>;
  }

  return (
    <UserLayout isSearchBox={false} isAdmin={true}>
      <AdminDashboard state={state} toggleState={toggleState} events={events} />
    </UserLayout>
  );
};

export default React.memo(AdminContainer);
