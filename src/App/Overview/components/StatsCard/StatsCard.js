import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  Divider,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdArrowForward,
} from "react-icons/all";
import RadialProgress from "./RadialProgress";

const FlexBox = styled(Box)`
  padding: 16px;
  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;
    padding: 24px;
  }
`;

const GraphBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 960px) {
    justify-content: flex-start;
  }
`;

const StyledAvatar = styled(Avatar)`
  height: 40px;
  width: 40px;
  font-size: 25px;
  background-color: ${(props) =>
    props.up ? "rgba(76, 175, 80, 0.08)" : "rgba(244, 67, 54, 0.08)"};
  color: ${(props) => (props.up ? "rgb(76, 175, 80)" : "rgb(244, 67, 54)")};
`;

const ProgressBar = styled(Box)`
  height: 125px;
  width: 125px;
`;

const ContentBox = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBox = styled(Box)`
  padding: 8px;

  button {
    text-transform: initial;
  }
`;

const StatsCard = () => {
  return (
    <Grid container spacing={3} alignItems="center" justify="space-between">
      <Grid item xs={12} md={6}>
        <Paper elevation={0} variant="outlined">
          <FlexBox>
            <GraphBox>
              <ProgressBar>
                <RadialProgress />
              </ProgressBar>
            </GraphBox>
            <ContentBox>
              <Box>
                <Typography variant="h4" color="primary">
                  0.299 BTC
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Weekly earnings
                </Typography>
              </Box>
              <StyledAvatar up={true} variant="square">
                <MdArrowDropDown />
              </StyledAvatar>
            </ContentBox>
          </FlexBox>
          <Divider />
          <ButtonBox>
            <Button color="primary" endIcon={<MdArrowForward />}>
              See all activity
            </Button>
          </ButtonBox>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={0} variant="outlined">
          <FlexBox>
            <GraphBox>
              <ProgressBar>
                <RadialProgress />
              </ProgressBar>
            </GraphBox>
            <ContentBox>
              <Box>
                <Typography variant="h4">$2,150,000.00</Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Your private wallet
                </Typography>
              </Box>
              <StyledAvatar up={false} variant="square">
                <MdArrowDropUp />
              </StyledAvatar>
            </ContentBox>
          </FlexBox>
          <Divider />
          <ButtonBox>
            <Button color="primary" endIcon={<MdArrowForward />}>
              Withdraw money
            </Button>
          </ButtonBox>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StatsCard;
