import React from "react";
import { Box } from "@material-ui/core";
import Search from "./Search/Search";
import Contacts from "./Contacts/Contacts";
import Notifications from "./Notifications/Notifications";
import Profile from "./Profile/Profile";

const Navigation = () => {
  return (
    <Box>
      <Search />
      <Contacts />
      <Notifications />
      <Profile />
    </Box>
  );
};

export default Navigation;
