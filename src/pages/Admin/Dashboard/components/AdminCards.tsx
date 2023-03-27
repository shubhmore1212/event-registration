import React from "react";
import { Box, Card, CardContent, Paper, Typography } from "@mui/material";

interface IProps{
    cardData:{
        user: string;
        data: any;
    }[]
}

const AdminCards = (props:IProps) => {
  return (
    <div className="admin-layout">
      {props.cardData.map((card: any) => (
        <Box
          key={card.user}
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
  );
};

export default React.memo(AdminCards);
