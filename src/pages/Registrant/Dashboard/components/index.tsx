import React from "react";

import OrganizerDashboard from "../../../Organizer/Dashboard/components";

interface IProps {
  events: any;
  handleNavigation: (id: number) => void;
}

const RegistrantDashboard: React.FC<IProps> = (props) => {
  const { events, handleNavigation } = props;

  return (
    <OrganizerDashboard
      events={events}
      displayEventHandler={handleNavigation}
    />
  );
};

export default React.memo(RegistrantDashboard);
