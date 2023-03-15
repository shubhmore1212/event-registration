import { ReactNode } from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

import UserNavbar from "./UserNavbar";
import FooterContent from "../shared/components/FooterContent";

import "./styles/styles.css";
interface BlankLayoutProps {
  children: ReactNode;
  isSearchBox?: boolean;
  isAdmin?: boolean;
  isOrganizer?: boolean;
  isRegistrant?: boolean;
  buttonHandler?: () => void;
  homeNavigation?: () => void;
  userName?:string
}

const UserLayout = (props: BlankLayoutProps) => {
  const {
    children,
    isSearchBox,
    isAdmin = false,
    isOrganizer = false,
    isRegistrant = false,
    buttonHandler,
    homeNavigation,
    userName
  } = props;
  
  return (
    <>
      <div className="user-layout">
        <Box
          className="app-content"
          sx={{ minheight: "80vh", overflowX: "hidden", position: "relative" }}
        >
          <UserNavbar
            isSearchBox={isSearchBox}
            isAdmin={isAdmin}
            isOrganizer={isOrganizer}
            isRegistrant={isRegistrant}
            buttonHandler={buttonHandler}
            homeNavigation={homeNavigation}
            userName={userName}
          />
          <Paper elevation={2} sx={{ p: "10px" }}>
            {children}
          </Paper>
        </Box>
      </div>
      <FooterContent />
    </>
  );
};

export default UserLayout;
