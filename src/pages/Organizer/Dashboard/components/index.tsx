import React from "react";

import MediaCard from "../../../../shared/components/MediaCard";

import "./styles/styles.css";

interface IProps {
  events: any;
  displayEventHandler: (id: number) => void;
}

const OrganizerDashboard = (props: IProps) => {
  return (
    <div className="card-display-grid">
      {props?.events?.map((event: any) => (
        <div key={event.id} onClick={() => props.displayEventHandler(event.id)}>
          <MediaCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default React.memo(OrganizerDashboard);
