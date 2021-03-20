import React from "react";
import {
  Popover,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StylesBox = styled(Box)`
  width: 320px;
  padding: 16px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: inherit;
`;

const OnlineStatus = styled.span`
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background-color: rgb(67, 160, 71);
`;

const ContactsPopover = (props) => {
  return (
    <Popover
      elevation={4}
      id="contacts-popover"
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
        <Typography variant="h6">Contacts</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar
                src="https://react-material-kit.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png"
                alt="v"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="subtitle2" noWrap>
                <StyledLink to="/"> Alcides Antonio</StyledLink>
              </Typography>
            </ListItemText>
            <OnlineStatus />
          </ListItem>

          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar
                src="https://react-material-kit.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png"
                alt="v"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="subtitle2" noWrap>
                <StyledLink to="/"> Alcides Antonio</StyledLink>
              </Typography>
            </ListItemText>
            <Typography variant="caption" component="span">
              2 hours ago
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar
                src="https://react-material-kit.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png"
                alt="v"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="subtitle2" noWrap>
                <StyledLink to="/">Yolanda Douglas</StyledLink>
              </Typography>
            </ListItemText>
            <Typography variant="caption" component="span">
              1 minute ago
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar
                src="https://react-material-kit.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png"
                alt="v"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="subtitle2" noWrap>
                <StyledLink to="/">Bobbie Harrison</StyledLink>
              </Typography>
            </ListItemText>
            <OnlineStatus />
          </ListItem>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar
                src="https://react-material-kit.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png"
                alt="v"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="subtitle2" noWrap>
                <StyledLink to="/">Clarence Silva</StyledLink>
              </Typography>
            </ListItemText>
            <OnlineStatus />
          </ListItem>
        </List>
      </StylesBox>
    </Popover>
  );
};

export default ContactsPopover;
