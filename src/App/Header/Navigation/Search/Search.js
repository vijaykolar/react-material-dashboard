import React, { useState } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { HiSearch } from "react-icons/all";
import loadable from "@loadable/component";

const LoadableDrawer = loadable(() => import("./Drawer"));

const Search = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [search, setSearch] = useState("");

  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };

  const inputChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Tooltip title="Search">
        <IconButton
          onClick={openDrawerHandler}
          color="inherit"
          aria-label="Search"
        >
          <HiSearch />
        </IconButton>
      </Tooltip>

      <LoadableDrawer
        search={search}
        openDrawer={openDrawer}
        closeDrawerHandler={closeDrawerHandler}
        inputChangeHandler={inputChangeHandler}
      />
    </>
  );
};

export default Search;
