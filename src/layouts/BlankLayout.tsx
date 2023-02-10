import { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Navbar from "./Navbar";

export type BlankLayoutProps = {
  children: ReactNode;
};

const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
    <Box
      className="app-content"
      sx={{ minHeight: "100vh", overflowX: "hidden", position: "relative" }}
    >
      <Navbar />
      {children}
    </Box>
  );
};

export const getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default BlankLayout;
