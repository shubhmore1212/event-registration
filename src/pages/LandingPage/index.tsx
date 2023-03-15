import React, { Profiler } from "react";
import { useNavigate } from "react-router-dom";

import LandingPage from "./components/Landing.page";

import { ROUTES } from "../../constants";
import { callback } from "utils/profilerPerfomance";

const LandingContainer = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate(ROUTES.LOGIN);
  };

  const signUpHandler = () => {
    navigate(ROUTES.SIGNUP);
  };

  return (
    <div style={{ backgroundColor: "#74AFA6" }}>
      <Profiler id="landing-page" onRender={callback}>
        <LandingPage
          loginHandler={loginHandler}
          signUpHandler={signUpHandler}
        />
      </Profiler>
    </div>
  );
};

export default React.memo(LandingContainer);
