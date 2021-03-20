import React from "react";
import {
  Drawer,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Box,
  Button,
} from "@material-ui/core";
import { HiSearch, IoMdClose } from "react-icons/all";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrap = styled(Box)`
  padding: 24px;
`;

const Flex = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchButton = styled(Button)`
  margin-left: 16px;
`;

const SearchDrawer = (props) => {
  return (
    <Drawer
      BackdropProps={{ invisible: true }}
      onClose={props.closeDrawerHandler}
      anchor="top"
      open={props.openDrawer}
    >
      <Wrap>
        <Flex>
          <IconButton onClick={props.closeDrawerHandler}>
            <IoMdClose />
          </IconButton>
        </Flex>
      </Wrap>
      <Wrap>
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <SearchBox>
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  color="primary"
                  value={props.search}
                  onChange={props.inputChangeHandler}
                  aria-describedby="Search"
                  startAdornment={
                    <InputAdornment position="start">
                      <HiSearch fontSize="large" />
                    </InputAdornment>
                  }
                  placeholder="Search..."
                  inputProps={{}}
                />
              </FormControl>

              <SearchButton variant="contained" color="primary">
                Search
              </SearchButton>
            </SearchBox>
          </Grid>
        </Grid>
      </Wrap>
    </Drawer>
  );
};

SearchDrawer.propTypes = {
  search: PropTypes.string.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  closeDrawerHandler: PropTypes.func.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
};

export default SearchDrawer;
