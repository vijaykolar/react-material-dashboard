import React from "react";
import styled from "styled-components";
import {
  Box,
  ListSubheader,
  List,
  Typography,
  ListItem,
  Button,
} from "@material-ui/core";
import {
  HiChartPie,
  HiChartSquareBar,
  HiShoppingBag,
  HiUser,
} from "react-icons/all";
import { NavLink } from "react-router-dom";

const NavWrap = styled(Box)`
  padding: 16px;
`;

const StyledButton = styled(Button)`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  text-transform: capitalize;
  color: rgb(107, 119, 140);

  &.active {
    color: #5664d2;
    font-weight: 600;
  }
`;

const Navigation = () => {
  return (
    <NavWrap>
      <List
        disablePadding
        subheader={
          <ListSubheader disableGutters>
            <Typography variant="overline" color="textPrimary">
              General
            </Typography>
          </ListSubheader>
        }
      />
      <List disablePadding>
        <ListItem disableGutters component="li">
          <StyledButton
            exact
            startIcon={<HiChartSquareBar />}
            component={NavLink}
            to="/"
          >
            overview
          </StyledButton>
        </ListItem>
        <ListItem disableGutters component="li">
          <StyledButton
            exact
            startIcon={<HiChartPie />}
            component={NavLink}
            to="/analytics"
          >
            analytics
          </StyledButton>
        </ListItem>
        <ListItem disableGutters component="li">
          <StyledButton
            exact
            startIcon={<HiShoppingBag />}
            component={NavLink}
            to="/finance"
          >
            finance
          </StyledButton>
        </ListItem>
        <ListItem disableGutters component="li">
          <StyledButton
            exact
            startIcon={<HiUser />}
            component={NavLink}
            to="/account"
          >
            account
          </StyledButton>
        </ListItem>
      </List>
    </NavWrap>
  );
};

export default Navigation;
