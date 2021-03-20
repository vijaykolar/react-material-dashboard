import React from "react";
import { Badge, IconButton, Tooltip } from "@material-ui/core";
import { HiBell } from "react-icons/all";
import loadable from "@loadable/component";

const LoadableNotificationPopover = loadable(() =>
  import("./NotificationPopover")
);

const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton
          onClick={handleClick}
          color="inherit"
          aria-label="Notifications"
        >
          <Badge color="secondary" variant="dot">
            <HiBell />
          </Badge>
        </IconButton>
      </Tooltip>

      <LoadableNotificationPopover
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  );
};

export default Notifications;
