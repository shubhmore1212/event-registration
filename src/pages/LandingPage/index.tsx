import React from "react";
import { useNavigate } from "react-router-dom";

import LandingPage from "./components/Landing.page";

import { ROUTES } from "../../constants";

const LandingContainer = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate(ROUTES.LOGIN);
  };

  const signUpHandler = () => {
    navigate(ROUTES.SIGNUP);
  };

  return (
    <div style={{ backgroundColor: "violet" }}>
      <LandingPage loginHandler={loginHandler} signUpHandler={signUpHandler} />
    </div>
  );
};

export default React.memo(LandingContainer);
