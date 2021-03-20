import React from "react";
import { CssBaseline } from "@material-ui/core";
import styled from "styled-components";

import Header from "./Header/Header";
import SideDrawer from "./SideDrawer/SideDrawer";

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
      <CssBaseline />
      <Header onClick={handleDrawerToggle} />
      <Main>
        <SideDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />

        <div style={{ padding: "50px 0px" }}>Content</div>
      </Main>
    </>
  );
};

export default App;
