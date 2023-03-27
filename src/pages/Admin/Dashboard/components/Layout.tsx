import React from "react";
import AdminCards from "./AdminCards";

import CommonTable from "./CommonTable";
import SelectElementChips from "./SelectElementChips";

import "./styles/styles.css";

const AdminLayout = (props: any) => {
  const { counts } = props;
  const cardData = [
    { user: "Events", data: counts.events },
    { user: "Organizer", data: counts.organizer },
    { user: "Registrants", data: counts.registants },
    { user: "Registered Users", data: counts.registered_users },
  ];

  return (
    <div data-testid="layout-root-div">
      <AdminCards cardData={cardData} />
      <div className="admin-chips">
        <SelectElementChips {...props} />
      </div>
      <div className="admin-table">
        <CommonTable {...props} />
      </div>
    </div>
  );
};

export default React.memo(AdminLayout);
