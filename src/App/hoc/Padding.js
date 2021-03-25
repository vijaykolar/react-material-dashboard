import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const PaddingBox = styled(Box)`
  padding: 16px;
`;

const Padding = ({ children }) => <PaddingBox>{children}</PaddingBox>;

export default Padding;
