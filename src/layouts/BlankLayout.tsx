import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

export type BlankLayoutProps = {
  homeNavigation:()=>void,
  children: ReactNode;
};

const BlankLayout = ({ homeNavigation,children }: BlankLayoutProps) => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate(ROUTES.LOGIN);
  };

  const signUpHandler = () => {
    navigate(ROUTES.SIGNUP);
  };

  return (
    <Box
      className="app-content"
      sx={{ minHeight: "100vh", overflowX: "hidden", position: "relative" }}
    >
      <Navbar
        isError={true}
        loginHandler={loginHandler}
        signUpHandler={signUpHandler}
        homeNavigation={homeNavigation}
      />
      {children}
    </Box>
  );
};

export default BlankLayout;
