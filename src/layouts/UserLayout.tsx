import { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Navbar from "./Navbar";
import UserNavbar from "./UserNavbar";
import FooterContent from "../shared/components/FooterContent";
import "./styles/styles.css";
import { Paper } from "@mui/material";

interface BlankLayoutProps {
  children: ReactNode;
  isSearchBox?: boolean;
  isAdmin?: boolean;
  isOrganizer?: boolean;
  isRegistrant?: boolean;
  buttonHandler?: () => void;
}

const UserLayout = (props: BlankLayoutProps) => {
  const {
    children,
    isSearchBox,
    isAdmin = false,
    isOrganizer = false,
    isRegistrant = false,
    buttonHandler,
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
