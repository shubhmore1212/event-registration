import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import React from "react";
import IMAGES from "../../../../assets";
import { formatDate, getDate, getTime } from "../../../../utils/FormatDate";
import EventPageHeroSection from "./EventPageHeroSection";

import "./styles/styles.css";

interface IProps {
  event: any;
  role_id: number;
  button: { name1: string; name2: string };
  buttonName1Handler: (id: number) => void;
  buttonName2Handler: () => void;
}

const DisplayEventComponent = (props: IProps) => {
  const { event, role_id, button, buttonName1Handler, buttonName2Handler } =
    props;
  const start_date = getDate(event?.start_date);
  const start_time = getTime(event?.start_time);
  const end_date = getDate(event?.end_date);
  const end_time = getTime(event?.end_time);

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
                {button.name1}
              </button>
              <button
                className="display-event-btn-2"
                onClick={buttonName2Handler}
              >
                {button.name2}
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
            <div
              className="event-description-content"
              style={{ width: "600px" }}
            >
              {event.description}
            </div>
          </Paper>
        </Box>
        <Box className="event-time-box">
          <Paper className="event-time-box" elevation={3}>
            <h2>
              <b>Timing</b>
            </h2>
            <div className="event-time-content">
              <div className="event-time">
                <span>Start Date:</span> {start_date}
              </div>
              <div className="event-time">
                <span>Start Time:</span> {start_time}
              </div>
              <div className="event-time">
                <span>End Date: </span>
                {end_date}
              </div>
              <div className="event-time">
                <span>End Time: </span>
                {end_time}
              </div>
              <div className="event-time">
                <h2 style={{ marginTop: "1rem" }}>Ticket Price:</h2>
                <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
                  <span>Entry Fees: </span>
                  {event.entry_fees} Rs.
                </p>
              </div>
              <div className="event-time">
                <h2 style={{ marginTop: "1rem" }}>Event Type:</h2>
                <p style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
                  <span>Mode: </span>
                  {event.mode.toUpperCase()}
                </p>
              </div>
            </div>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default React.memo(DisplayEventComponent);
