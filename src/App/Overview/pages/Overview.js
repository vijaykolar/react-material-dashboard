import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const StyledBox = styled(Box)`
  padding: 48px 0;
  flex-grow: 1;
  @media (min-width: 960px) {
    padding: 60px 0;
  }
`;

const Overview = () => {
  return <StyledBox>Overview</StyledBox>;
};

export default Overview;
