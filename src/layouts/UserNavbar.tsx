import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import MouseOverPopover from "../shared/components/MouseOverPopover";
import SearchBox from "../shared/components/SearchBox";

import Logo from "./Logo";

import "./styles/styles.css";

interface IProps {
  isSearchBox?: boolean;
  isAdmin?: boolean;
  isOrganizer?: boolean;
  isRegistrant?: boolean;
  buttonHandler?: () => void;
  homeNavigation?: () => void;
  userName?: string;
}

const UserNavbar = (props: any) => {
  const navigate = useNavigate();
  const {
    isSearchBox,
    isAdmin,
    isOrganizer,
    isRegistrant,
    buttonHandler,
    homeNavigation,
    userName
  } = props;

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate(ROUTES.HOME, { replace: true });
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <Logo homeNavigation={homeNavigation} />
      </div>
      <div className="nav-links">
        <div className="search-box-container">
          {isSearchBox && (
            <>
              <SearchBox
                searchInput={""}
                searchHandler={() => {
                  console.log("search");
                }}
              />
              <button className="search-btn">Search</button>
            </>
          )}
        </div>

        {isOrganizer && (
          <button className="search-btn" onClick={buttonHandler}>
            Create Event
          </button>
        )}
        {isRegistrant && (
          <button className="search-btn" onClick={buttonHandler}>
            Registered Events
          </button>
        )}
      </div>
      <div className="nav-credentials">
        <div className="log-out">
          <MouseOverPopover logoutHandler={logoutHandler} userName={userName} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserNavbar);
