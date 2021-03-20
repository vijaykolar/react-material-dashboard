import React from "react";
import {
  Box,
  ListItem,
  Popover,
  Typography,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import { HiCreditCard, HiChatAlt, HiShoppingCart } from "react-icons/all";
import { Link } from "react-router-dom";

const StylesBox = styled(Box)`
  width: 320px;
`;

const StyledTypography = styled(Typography)`
  padding: 16px;
`;

const StyledAvatar = styled(Avatar)`
  background-color: rgb(86, 100, 210);
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: inherit;
`;

const ButtonWrap = styled(Box)`
  text-align: center;
  padding: 8px;
`;

const StyledButton = styled(Button)`
  text-transform: capitalize;
`;

const NotificationPopover = (props) => {
  return (
    <Popover
      elevation={4}
      id="notifications-popover"
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <StylesBox>
        <StyledTypography variant="h6">Notifications</StyledTypography>
        <List disablePadding>
          <ListItem divider>
            <ListItemAvatar>
              <StyledAvatar color="primary">
                <HiCreditCard />
              </StyledAvatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle2">
                  <StyledLink to="/">Your order is Placed</StyledLink>
                </Typography>
              }
              secondary={<Typography variant="body2"> 2 days ago</Typography>}
            />
          </ListItem>
          <ListItem divider>
            <ListItemAvatar>
              <StyledAvatar color="primary">
                <HiChatAlt />
              </StyledAvatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle2">
                  <StyledLink to="/">New message received</StyledLink>
                </Typography>
              }
              secondary={
                <Typography variant="body2">
                  You have 19 unread messages
                </Typography>
              }
            />
          </ListItem>

          <ListItem divider>
            <ListItemAvatar>
              <StyledAvatar color="primary">
                <HiShoppingCart />
              </StyledAvatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle2">
                  <StyledLink to="/">Your item is shipped</StyledLink>
                </Typography>
              }
              secondary={<Typography variant="body2">just now</Typography>}
            />
          </ListItem>
        </List>

        <ButtonWrap>
          <StyledButton size="small" color="primary">
            Mark all as read
          </StyledButton>
        </ButtonWrap>
      </StylesBox>
    </Popover>
  );
};

export default NotificationPopover;
