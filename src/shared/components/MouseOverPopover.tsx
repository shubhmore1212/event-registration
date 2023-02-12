import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import "./styles/styles.css";

export default function MouseOverPopover(props: any) {
  const { logoutHandler ,userName} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        <List className="pop-over-list">
          <ListItem className="pop-over-list-item">
            <Card className="pop-over-card">
              <div className="pop-over-div-container">
                <CardContent>
                  <Avatar
                    alt="Remy Sharp"
                    className="pop-over-avatar"
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Typography variant="body2"> Hi, {userName} &#128075;</Typography>
                  </Button>
                </CardActions>
              </div>
            </Card>
          </ListItem>
          <ListItem className="pop-over-list-item">
            <button className="log-out-btn" onClick={logoutHandler}>
              LOGOUT
            </button>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
