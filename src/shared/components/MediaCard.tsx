import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Avatar, CardHeader, Chip, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  event: any;
}

const colors = ["red",,"pink", "blue", "green", "violet"];
const length=colors.length-1;

const MediaCard = (props: IProps) => {
  const { event } = props;
  console.log(event);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Paper elevation={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor:
                    colors[Math.floor(Math.random() * length)],
                }}
                aria-label="Event"
              >
                {event.name.substring(0, 1)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <Chip
                  label={event.mode.toUpperCase()}
                  variant={event.mode === "online" ? "outlined" : "filled"}
                  color={event.mode === "online" ? "primary" : "warning"}
                />
              </IconButton>
            }
            title={
              <Chip
                label={event.status.toUpperCase()}
                variant={event.status === "open" ? "outlined" : "filled"}
                color={event.status === "open" ? "primary" : "warning"}
              />
            }
          />
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {event.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div style={{ height: "40px", overflow: "hidden" }}>
                {event.description}
              </div>
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button> */}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Paper>
    </Box>
  );
};

export default React.memo(MediaCard);
