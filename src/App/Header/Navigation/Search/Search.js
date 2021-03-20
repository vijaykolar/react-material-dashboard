import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { HiSearch } from "react-icons/all";

const Search = () => {
  return (
    <Tooltip title="Search">
      <IconButton color="inherit" aria-label="Search">
        <HiSearch />
      </IconButton>
    </Tooltip>
  );
};

export default Search;
