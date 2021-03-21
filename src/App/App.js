import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header/Header";
import SideDrawer from "./SideDrawer/SideDrawer";
import Overview from "./Overview/pages/Overview";
import Analytics from "./Analytics/pages/Analytics";
import Finance from "./Finance/pages/Finance";
import Account from "./Account/pages/Account";

const Main = styled.main`
  display: flex;
`;

const Content = styled.section`
  padding: 75px 16px 50px;
  flex-grow: 1;
  @media (min-width: 960px) {
    padding: 100px 24px 60px;
  }
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
          <Content>
            <Switch>
              <Route exact path={"/"} component={Overview} />
              <Route exact component={Analytics} path="/analytics" />
              <Route exact component={Finance} path={"/finance"} />
              <Route exact component={Account} path={"/account"} />
            </Switch>
          </Content>
        </Main>
      </Router>
    </>
  );
};

export default App;
