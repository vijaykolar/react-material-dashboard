import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileWrap = styled(Box)`
  padding: 16px;
`;

const ProfileBox = styled(Box)`
  align-items: center;
  background-color: rgb(244, 245, 247);
  border-radius: 4px;
  display: flex;
  overflow: hidden;
  padding: 16px;
`;

const ProfileAvatar = styled(Avatar)`
  height: 48px;
  width: 48px;
`;

const ProfileText = styled(Box)`
  margin-left: 16px;
`;

const TierLink = styled(Link)`
  text-decoration: none;
  color: rgb(86, 100, 210);
`;

const Profile = () => {
  return (
    <ProfileWrap>
      <ProfileBox>
        <Link to="/">
          <ProfileAvatar
            src="https://react-material-kit.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png"
            sizes="large"
            alt="User name"
          />
        </Link>

        <ProfileText>
          <Typography variant="subtitle2">Jane Doe</Typography>
          <Typography variant="body2">
            Your plan: <TierLink to="/">Premium</TierLink>{" "}
          </Typography>
        </ProfileText>
      </ProfileBox>
    </ProfileWrap>
  );
};

export default Profile;
