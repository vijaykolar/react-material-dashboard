import React from "react";
import { Avatar, Tooltip, IconButton } from "@material-ui/core";
import styled from "styled-components";
import ProfilePopover from "./ProfilePopover";

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Tooltip title="Profile">
        <IconButton onClick={handleClick} size="small">
          <ProfileAvatar src="https://react-material-kit.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png">
            V
          </ProfileAvatar>
        </IconButton>
      </Tooltip>

      <ProfilePopover
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  );
};

const ProfileAvatar = styled(Avatar)`
  height: 30px;
  width: 30px;
`;

export default Profile;
