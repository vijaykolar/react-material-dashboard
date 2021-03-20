import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";

const Div = styled.div`
  flex-grow: 1;
`;

const Header = () => {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Logo />
        <Div />
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
