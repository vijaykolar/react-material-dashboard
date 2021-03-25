import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const Center = styled(Box)`
  text-align: center;
`;

const TextCenter = ({ children }) => <Center>{children}</Center>;

export default TextCenter;
