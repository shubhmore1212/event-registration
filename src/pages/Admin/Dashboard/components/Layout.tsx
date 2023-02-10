import {
  Box,
  Card,
  Button,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import CommonTable from "./CommonTable";
import SelectElementChips from "./SelectElementChips";

import "./styles/styles.css";

const colors = ["red", , "pink", "blue", "green", "violet"];
const length = colors.length - 1;

interface IProps {
  state: boolean;
  toggleState: () => void;
  events:any;
}

const AdminLayout = (props: any) => {
  const {events} = props;
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
        <CommonTable events={events} />
      </div>
    </>
  );
};

export default React.memo(AdminLayout);
