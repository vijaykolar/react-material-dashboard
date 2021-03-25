import React from "react";
import PropTypes from "prop-types";
import { Drawer, Box, Hidden, Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import Profile from "./Profile/Profile";
import Navigation from "./Navigation/Navigation";

const StyledBox = styled(Box)`
  width: 280px;

  @media (min-width: 960px) {
    margin-top: 64px;
  }
`;

const SideDrawerBox = styled.aside`
  @media (min-width: 1280px) {
    width: 280px;
    flex-shrink: 0;
    height: 100vh;
  }
`;

function SideDrawer(props) {
  const theme = useTheme();

  const drawer = (
    <StyledBox>
      <Profile />
      <Divider />
      <Navigation />
    </StyledBox>
  );
  return (
    <SideDrawerBox>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden lgUp implementation="css">
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
      <Hidden mdDown implementation="css">
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
