import React from "react";
import { useNavigate } from "react-router-dom";

import OrganizerDashboard from "../../../Organizer/Dashboard/components";

interface IProps {
  events: any;
}

const RegistrantDashboard: React.FC<IProps> = (props) => {
  const { events } = props;
  const navigate = useNavigate();

  const handleNavigation = (event_id: any) => {
    navigate(`/display-event/${event_id}`, { replace: false });
  };

  return (
    <>
      <OrganizerDashboard events={events} />
    </>
  );
};

export default React.memo(RegistrantDashboard);
