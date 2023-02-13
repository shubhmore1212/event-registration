import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useRegisterEvent } from "../../../hooks/useQueryHooks";
import UserLayout from "../../../layouts/UserLayout";

import RegisterFormComponent from "./components";

const RegisterFormContainer = () => {
    const {event_id}=useParams();
  const navigate = useNavigate();
  const { user, accessToken } = useCurrentUser();

  const onSuccess = async (values: any) => {
    console.log(values);
    navigate("/register");
  };

  const onError = (values: any) => {
    console.log(values);
  };

  const { mutate: createEvent } = useRegisterEvent({
    onSuccess,
    onError,
  });

  const onSubmit = async (values: any) => {
    createEvent({ ...values, id: user.id, accessToken });
  };
  return (
    <UserLayout
      isSearchBox={false}
      isRegistrant={true}
    //   buttonHandler={navigationHandler}
    >
      <RegisterFormComponent />
    </UserLayout>
  );
};

export default React.memo(RegisterFormContainer);
