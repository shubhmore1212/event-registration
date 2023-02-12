import React from "react";

import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import CommonTable from "./CommonTable";
import SelectElementChips from "./SelectElementChips";

import "./styles/styles.css";

const AdminLayout = (props: any) => {

  return (
    <>
      <div className="admin-layout">
        {[1, 2, 3].map((e) => (
          <Box
            key={e}
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
                    <h1 id="count-heading">5000</h1>
                  </div>
                </div>
                <CardContent>
                  <Typography
                    sx={{ display: "flex", justifyContent: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Lizard
                  </Typography>
                </CardContent>
              </Card>
              {/* </div> */}
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
