import React from "react";
import { Box, Button, Divider, Popover, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiUser, MdSettings } from "react-icons/all";

const StylesBox = styled(Box)`
  width: 240px;
`;

const StyledBox = styled(Box)`
  margin-top: 16px;
`;

const StyledTypography = styled(Typography)`
  padding: 16px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 10px 16px;
  justify-content: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: capitalize;
`;

const ButtonWrap = styled(Box)`
  padding: 16px;
`;

const LogOut = styled(Button)`
  text-transform: capitalize;
`;

const ProfilePopover = (props) => {
  return (
    <Popover
      elevation={4}
      id="profile-popover"
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <StylesBox>
        <StyledTypography variant="subtitle2">Jane Rotanson</StyledTypography>
        <Divider />
        <StyledBox>
          <StyledButton startIcon={<HiUser fontSize="small" />}>
            <Typography variant="subtitle2">
              <StyledLink to="/">Profile</StyledLink>
            </Typography>
          </StyledButton>

          <StyledButton startIcon={<MdSettings fontSize="small" />}>
            <Typography variant="subtitle2">
              <StyledLink to="/">Settings</StyledLink>
            </Typography>
          </StyledButton>
        </StyledBox>
        <ButtonWrap>
          <LogOut color="primary" fullWidth variant="outlined">
            Logout
          </LogOut>
        </ButtonWrap>
      </StylesBox>
    </Popover>
  );
};

export default ProfilePopover;
