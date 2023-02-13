import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import React from "react";
import IMAGES from "../../../../assets";
import { formatDate } from "../../../../utils/FormatDate";
import EventPageHeroSection from "./EventPageHeroSection";

import "./styles/styles.css";

interface IProps {
  event: any;
  role_id: number;
  buttonName1: string;
  buttonName2: string;
  buttonName1Handler: (id: number) => void;
  buttonName2Handler: () => void;
}

const DisplayEventComponent = (props: IProps) => {
  const {
    event,
    role_id,
    buttonName1,
    buttonName2,
    buttonName1Handler,
    buttonName2Handler,
  } = props;
  const start_date = new Date(event?.start_date)
    .toDateString()
    .split(" ")
    .join(",");
  const start_time = new Date(event?.start_time).toLocaleTimeString();

  console.log(role_id);

  return (
    <>
      <div className="hero-section-container">
        <EventPageHeroSection />
        <div className="image-container">
          <div className="block">
            <h1 id="event-name">{event.name}</h1>
            <p id="organizer-name">by Lorem, ipsum.</p>
            <p id="event-description">
              {event?.description?.substring(0, event.description.indexOf("."))}
            </p>
            <p id="event-venue">{event.venue}</p>
          </div>
          <div className="date-block">
            <div className="date-time-block">Date & Time</div>
            <div id="date-time">{`${start_date} at ${start_time}`}</div>

            <div className="registration-btn">
              <button
                className="display-event-btn-1"
                onClick={() => buttonName1Handler(event.id)}
              >
                {buttonName1}
              </button>
              <button
                className="display-event-btn-2"
                onClick={buttonName2Handler}
              >
                {buttonName2}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="event-description-container">
        <Box className="event-description-box">
          <Paper className="event-description-paper" elevation={3}>
            <h2>
              <b>Description</b>
            </h2>
            <div style={{ width: "600px" }}>{event.description}</div>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default React.memo(DisplayEventComponent);
