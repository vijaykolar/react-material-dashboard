import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { HiMenuAlt4 } from "react-icons/all";

import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";

const Div = styled.div`
  flex-grow: 1;
`;

const StyledIconButton = styled(IconButton)`
  @media (min-width: 960px) {
    display: none;
  }
`;

const Header = (props) => {
  return (
    <AppBar elevation={0} style={{ zIndex: 1201 }}>
      <Toolbar>
        <StyledIconButton
          onClick={props.onClick}
          edge="start"
          color="inherit"
          aria-label="Menu"
        >
          <HiMenuAlt4 />
        </StyledIconButton>
        <Logo />
        <Div />
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
