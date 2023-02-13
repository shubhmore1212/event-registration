import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../shared/components/SearchBox";

import Logo from "./Logo";

import "./styles/styles.css";

interface IProps {
  isSearchBox?: boolean;
  isAdmin?: boolean;
  isOrganizer?: boolean;
  isRegistrant?: boolean;
  buttonHandler?: () => void;
}

const UserNavbar = (props: any) => {
  const navigate = useNavigate();
  const { isSearchBox, isAdmin, isOrganizer, isRegistrant, buttonHandler } =
    props;

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <Logo />
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
      </div>
      <div className="nav-credentials">
        <div className="log-out">
          <button className="log-out-btn" onClick={logoutHandler}>
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserNavbar);
