import React from "react";
import { Typography, Box } from "@mui/material";

import MediaCard from "shared/components/MediaCard";

import IMAGES from "assets";

import "./styles/styles.css";

interface IProps {
  events: any;
  displayEventHandler: (id: number) => void;
}

const OrganizerDashboard = (props: IProps) => {
  return (
    <div className="card-display-grid">
      {props?.events?.length ? (
        props?.events?.map((event: any) => (
          <div
            key={event.id}
            onClick={() => props.displayEventHandler(event.id)}
          >
            <MediaCard event={event} />
          </div>
        ))
      ) : (
        <Box className="content-center" sx={{ mt: 5 }}>
          <Box className="error-content">
            <Box>
              <Typography className="error-description" variant="h5">
                OOPs! No Events Created yet
              </Typography>
              <Typography variant="body2">
                Click on the Create Event Button and Start the Journey
              </Typography>
            </Box>
            <img
              className="error-img"
              alt="error-illustration"
              src={IMAGES.Error401}
            />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default React.memo(OrganizerDashboard);
