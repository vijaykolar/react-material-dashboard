import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header/Header";
import SideDrawer from "./SideDrawer/SideDrawer";
import Overview from "./Overview/pages/Overview";
import Analytics from "./Analytics/pages/Analytics";

const Main = styled.main`
  display: flex;
`;

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  return (
    <>
      <Router>
        <CssBaseline />
        <Header onClick={handleDrawerToggle} />
        <Main>
          <SideDrawer
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Switch>
            <Route exact path={"/"} component={Overview} />
            <Route exact component={Analytics} path={"/analytics"} />
          </Switch>
        </Main>
      </Router>
    </>
  );
};

export default App;
