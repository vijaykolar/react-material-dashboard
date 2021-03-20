import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const StyledBox = styled(Box)`
  padding: 48px 0;
  flex-grow: 1;
  @media (min-width: 960px) {
    padding: 60px 0;
  }
`;

const Analytics = () => {
  return <StyledBox>Analytics</StyledBox>;
};

export default Analytics;
