import React from "react";
import { Box, Card, CardContent, Paper, Typography } from "@mui/material";

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
    <>
      <div className="admin-layout">
        {cardData.map((card: any) => (
          <Box
            key={card}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "345px",
              },
            }}
          >
            <Paper elevation={3}>
              <Card sx={{ maxWidth: 345 }}>
                <div className="count-section">
                  <div className="circle-count">
                    <h1 id="count-heading">{card.data}</h1>
                  </div>
                </div>
                <CardContent>
                  <Typography
                    sx={{ display: "flex", justifyContent: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {card.user}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Box>
        ))}
      </div>
      <div className="admin-chips">
        <SelectElementChips {...props} />
      </div>
      <div className="admin-table">
        <CommonTable {...props} />
      </div>
    </>
  );
};

export default React.memo(AdminLayout);
