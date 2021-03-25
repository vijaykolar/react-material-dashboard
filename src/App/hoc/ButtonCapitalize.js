import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonCapital = styled(Button)`
  text-transform: capitalize;
`;

const ButtonCapitalize = ({ children, color }) => {
  return <ButtonCapital color={color}>{children}</ButtonCapital>;
};

export default ButtonCapitalize;
