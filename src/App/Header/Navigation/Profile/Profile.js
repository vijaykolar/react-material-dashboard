import React from "react";
import { Avatar, Tooltip, IconButton } from "@material-ui/core";
import styled from "styled-components";

const Profile = () => {
  return (
    <Tooltip title="Profile">
      <IconButton size="small">
        <ProfileAvatar src="https://react-material-kit.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png">
          V
        </ProfileAvatar>
      </IconButton>
    </Tooltip>
  );
};

const ProfileAvatar = styled(Avatar)`
  height: 30px;
  width: 30px;
`;

export default Profile;
