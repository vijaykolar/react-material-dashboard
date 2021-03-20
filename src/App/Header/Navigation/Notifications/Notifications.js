import React from "react";
import { Badge, IconButton, Tooltip } from "@material-ui/core";
import { HiBell } from "react-icons/all";

const Notifications = () => {
  return (
    <Tooltip title="Notifications">
      <IconButton color="inherit" aria-label="Notifications">
        <Badge color="secondary" variant="dot">
          <HiBell />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default Notifications;
