import React from "react";
import { Grid, Paper, Typography, Box, Button } from "@material-ui/core";
import Padding from "../../hoc/Padding";
import {
  HiBriefcase,
  MdArrowForward,
  HiInformationCircle,
  HiExternalLink,
  HiDownload,
  HiUsers,
} from "react-icons/all";
import styled from "styled-components";

const TitleBox = styled(Box)`
  display: flex;
  align-items: center;

  svg {
    font-size: 1.8rem;
    color: #5664d2;
    margin-right: 8px;
  }
`;

const BgGrey = styled(Box)`
  background-color: rgb(244, 245, 247);
`;

const Features = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <TitleBox>
              <HiBriefcase color="primary" fontSize="large" />
              <Typography variant="h6">Jobs</Typography>
            </TitleBox>
            <Typography
              style={{ fontWeight: 500, margin: "8px 0" }}
              variant="subtitle1"
            >
              Find your dream job
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Padding>
          <BgGrey>
            <Padding>
              <Button
                style={{ textTransform: "capitalize" }}
                color="primary"
                endIcon={<MdArrowForward />}
              >
                Search Jobs
              </Button>
            </Padding>
          </BgGrey>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <TitleBox>
              <HiInformationCircle color="primary" fontSize="large" />
              <Typography variant="h6">Help Center</Typography>
            </TitleBox>
            <Typography
              style={{ fontWeight: 500, margin: "8px 0" }}
              variant="subtitle1"
            >
              Need help figuring things out?
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Padding>
          <BgGrey>
            <Padding>
              <Button
                style={{ textTransform: "capitalize" }}
                color="primary"
                endIcon={<HiExternalLink />}
              >
                Help center
              </Button>
            </Padding>
          </BgGrey>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <TitleBox>
              <HiDownload color="primary" fontSize="large" />
              <Typography variant="h6">Download</Typography>
            </TitleBox>
            <Typography
              style={{ fontWeight: 500, margin: "8px 0" }}
              variant="subtitle1"
            >
              Download our Free PDF and learn how to get more job leads
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Padding>
          <BgGrey>
            <Padding>
              <Button
                variant="outlined"
                style={{ textTransform: "capitalize" }}
                color="primary"
                endIcon={<HiDownload />}
              >
                Download free PDF
              </Button>
            </Padding>
          </BgGrey>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <TitleBox>
              <HiUsers color="primary" fontSize="large" />
              <Typography variant="h6">Contacts</Typography>
            </TitleBox>
            <Typography
              style={{ fontWeight: 500, margin: "8px 0" }}
              variant="subtitle1"
            >
              Contacts allow you to manage your company contracts
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Padding>
          <BgGrey>
            <Padding>
              <Button
                variant="outlined"
                style={{ textTransform: "capitalize" }}
                color="primary"
                endIcon={<MdArrowForward />}
              >
                my contacts
              </Button>
            </Padding>
          </BgGrey>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Features;
