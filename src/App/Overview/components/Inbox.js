import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";

const Inbox = () => {
  return (
    <List>
      <ListItem divider>
        <ListItemAvatar>
          <Avatar
            color="primary"
            src="https://randomuser.me/api/portraits/women/0.jpg"
            alt="A"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Alcides Antonio"
          secondary="Hello, we spoke earlier on t"
        />
        <Typography variant="caption">2 minutes ago</Typography>
      </ListItem>
      <ListItem divider>
        <ListItemAvatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/61.jpg"
            alt="D"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Design Cloud"
          secondary="Hello, we are waiting for design"
        />
        <Typography variant="caption">2 days ago</Typography>
      </ListItem>
      <ListItem divider>
        <ListItemAvatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/95.jpg"
            alt="M"
          />
        </ListItemAvatar>
        <ListItemText
          primary="MTb Bamb"
          secondary="Still waiting for feedback"
        />
        <Typography variant="caption">1 hour ago</Typography>
      </ListItem>
      <ListItem divider>
        <ListItemAvatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/97.jpg"
            alt="V"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Vraun Dhavan"
          secondary="Need more information about c"
        />
        <Typography variant="caption">a day ago</Typography>
      </ListItem>
    </List>
  );
};

export default Inbox;
