import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const Flex = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexBox = ({ children }) => <Flex>{children}</Flex>;

export default FlexBox;
