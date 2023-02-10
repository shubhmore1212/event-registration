import React from "react";
import { useNavigate } from "react-router-dom";
import UserLayout from "../../../../layouts/UserLayout";
import MediaCard from "../../../../shared/components/MediaCard";

import "./styles/styles.css";

const OrganizerDashboard = (props: any) => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/create-event");
  };

  const displayEventHandler = (id: number) => {
    navigate(`/display-event/${id}`);
  };

  return (
    <div className="card-display-grid">
      {props?.events?.map((event: any) => (
        <div key={event.id} onClick={() => displayEventHandler(event.id)}>
          <MediaCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default React.memo(OrganizerDashboard);
