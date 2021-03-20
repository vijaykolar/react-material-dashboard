import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { HiUsers } from "react-icons/all";
import loadable from "@loadable/component";

const LoadableContactsPopover = loadable(() => import("./ContactsPopover"));

const Contacts = () => {
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
      <Tooltip title="Contacts">
        <IconButton onClick={handleClick} color="inherit" aria-label="Contacts">
          <HiUsers />
        </IconButton>
      </Tooltip>
      <LoadableContactsPopover
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  );
};

export default Contacts;
