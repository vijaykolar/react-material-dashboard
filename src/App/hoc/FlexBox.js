import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const Flex = styled(Box)`
  display: flex;
  justify-content: space-between;
  //switch (props.alignItems) {
  //  case: ;
  //}
`;

const FlexBox = ({ children }) => <Flex>{children}</Flex>;

export default FlexBox;
