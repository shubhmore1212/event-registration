import React from "react";

import Logo from "../shared/components/Logo";

import "./styles/styles.css";

interface IProps {
  loginHandler: () => void;
  signUpHandler: () => void;
  isError: boolean;
  homeNavigation?: () => void;
}

const Navbar = (props: IProps) => {
  const { loginHandler, signUpHandler, isError, homeNavigation } = props;

  return (
    <div className="nav-container">
      <div className="logo">
        <Logo homeNavigation={homeNavigation} />
      </div>
      <div className="nav-links">
        {!isError && (
          <>
            <div className="nav-link">
              <a href="#about" style={{ textDecoration: "none" }}>
                ABOUT
              </a>
            </div>
            <div className="nav-link">
              <a href="#contact" style={{ textDecoration: "none" }}>
                CONTACT
              </a>
            </div>
          </>
        )}
      </div>
      <div className="nav-credentials">
        <div className="login" onClick={loginHandler}>
          LOGIN
        </div>
        <div className="signup" onClick={signUpHandler}>
          SIGN UP
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
