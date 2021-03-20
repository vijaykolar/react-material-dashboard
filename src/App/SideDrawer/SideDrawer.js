import React from "react";
import PropTypes from "prop-types";
import { Drawer, Box, Hidden, List, ListItem } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledBox = styled(Box)`
  width: 240px;

  @media (min-width: 960px) {
    margin-top: 64px;
  }
`;

const SideDrawerBox = styled(Box)`
  @media (min-width: 960px) {
    width: 240px;
    flex-shrink: 0;
    height: 100vh;
  }
`;

function SideDrawer(props) {
  const theme = useTheme();

  const drawer = (
    <StyledBox>
      <List>
        <ListItem>
          <NavLink exact to="/">
            Overview
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink exact to="/analytics">
            Analytics
          </NavLink>
        </ListItem>
      </List>
    </StyledBox>
  );
  return (
    <SideDrawerBox>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: false, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent"> {drawer}</Drawer>
      </Hidden>
    </SideDrawerBox>
  );
}
SideDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default SideDrawer;
