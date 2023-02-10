import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import BlankLayout from "../../layouts/BlankLayout";

import "./styles/styles.css";

export interface IErrors {
  errorNumber: string;
  errorDescription: string;
  errorBody: string;
  errorImg: string;
}

const Error = (props: IErrors) => {
  const { errorNumber, errorDescription, errorBody, errorImg } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/", { replace: true });
  };

  return (
    <BlankLayout>
      <Box className="content-center" sx={{mt:5}}>
        <Box className="error-content">
          <Box>
            <Typography variant="h1">{errorNumber}</Typography>
            <Typography className="error-description" variant="h5">
              {errorDescription}
            </Typography>
            <Typography variant="body2">{errorBody}</Typography>
          </Box>
          <img className="error-img" alt="error-illustration" src={errorImg} />
          <Button
            className="error-back-btn"
            variant="contained"
            onClick={handleNavigate}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    </BlankLayout>
  );
};

export default Error;
