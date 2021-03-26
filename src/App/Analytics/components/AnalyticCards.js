import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Divider,
  Avatar,
  Button,
} from "@material-ui/core";
import Padding from "../../hoc/Padding";
import FlexBox from "../../hoc/FlexBox";
import LineChart from "../../shared/UI/charts/apex-charts/LineChart";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdArrowForward,
} from "react-icons/all";
import styled from "styled-components";

const StyledAvatar = styled(Avatar)`
  height: 30px;
  width: 30px;
  font-size: 25px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.up ? "rgba(76, 175, 80, 0.08)" : "rgba(244, 67, 54, 0.08)"};
  color: ${(props) => (props.up ? "rgb(76, 175, 80)" : "rgb(244, 67, 54)")};
`;

const AnalyticCards = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <FlexBox>
              <Box style={{ alignSelf: "center" }}>
                <Typography color="textPrimary" variant="body2">
                  Impressions
                </Typography>
                <Typography variant="h4">1.9M</Typography>
              </Box>
              <Box>
                <LineChart curve="smooth" />
              </Box>
            </FlexBox>
          </Padding>
          <Divider />
          <Padding>
            <Button
              style={{ textTransform: "initial" }}
              color="primary"
              endIcon={<MdArrowForward />}
            >
              See all visits
            </Button>
          </Padding>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <FlexBox>
              <Box style={{ alignSelf: "center" }}>
                <Typography color="textPrimary" variant="body2">
                  Spent
                </Typography>
                <Typography variant="h4">$41.2K</Typography>
              </Box>
              <Box>
                <LineChart curve="straight" />
              </Box>
            </FlexBox>
          </Padding>
          <Divider />
          <Padding>
            <FlexBox>
              <StyledAvatar up={true} variant="square">
                <MdArrowDropUp />
              </StyledAvatar>

              <Typography variant="caption">
                12% more then last month
              </Typography>
            </FlexBox>
          </Padding>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <FlexBox>
              <Box style={{ alignSelf: "center" }}>
                <Typography color="textPrimary" variant="body2">
                  Engagements
                </Typography>
                <Typography variant="h4">16K</Typography>
              </Box>
              <Box>
                <LineChart curve="stepline" />
              </Box>
            </FlexBox>
          </Padding>
          <Divider />
          <Padding>
            <FlexBox>
              <StyledAvatar up={false} variant="square">
                <MdArrowDropDown />
              </StyledAvatar>
              <Typography variant="caption">
                12% more then last month
              </Typography>
            </FlexBox>
          </Padding>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <FlexBox>
              <Box style={{ alignSelf: "center" }}>
                <Typography color="textPrimary" variant="body2">
                  Conversions
                </Typography>
                <Typography variant="h4">13K</Typography>
              </Box>
              <Box>
                <LineChart curve="smooth" />
              </Box>
            </FlexBox>
          </Padding>
          <Divider />
          <Padding>
            <FlexBox>
              <StyledAvatar up={true} variant="square">
                <MdArrowDropUp />
              </StyledAvatar>
              <Typography variant="caption">
                12% more then last month
              </Typography>
            </FlexBox>
          </Padding>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AnalyticCards;
