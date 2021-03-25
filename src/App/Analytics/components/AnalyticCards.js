import React from "react";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import Padding from "../../hoc/Padding";
import FlexBox from "../../hoc/FlexBox";
import LineChart from "../../shared/UI/charts/apex-charts/LineChart";

const AnalyticCards = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <FlexBox>
              <Box>
                <Typography color="textPrimary" variant="body2">
                  Impressions
                </Typography>
                <Typography variant="h4">1.9M</Typography>
              </Box>
              <Box>
                <LineChart />
              </Box>
            </FlexBox>
          </Padding>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper elevation={0} variant="outlined">
          <Padding>s</Padding>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper elevation={0} variant="outlined">
          <Padding>s</Padding>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper elevation={0} variant="outlined">
          <Padding>s</Padding>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AnalyticCards;
