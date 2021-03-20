import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { HiUsers } from "react-icons/all";

const Contacts = () => {
  return (
    <Tooltip title="Contacts">
      <IconButton color="inherit" aria-label="Contacts">
        <HiUsers />
      </IconButton>
    </Tooltip>
  );
};

export default Contacts;
