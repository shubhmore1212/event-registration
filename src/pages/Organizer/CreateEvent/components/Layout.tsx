import React from "react";
import { Box, Card, CardContent, Paper } from "@mui/material";

import CreateEventForm from "./CreateEventForm";

import "./styles/styles.css";

interface IProps {
  initialValues: any;
  onSubmit: any;
}

const CreateEventLayout = (props: IProps) => {
  const { initialValues, onSubmit } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 8,
        },
      }}
    >
      <Paper className="create-event-paper" elevation={3}>
        <Card>
          <CardContent>
            <CreateEventForm
              initialValues={initialValues}
              onSubmit={onSubmit}
            />
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default React.memo(CreateEventLayout);
