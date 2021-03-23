import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";

import Padding from "../../hoc/Padding";
import BarChartGrouped from "../../shared/UI/charts/apex-charts/BarChartGrouped";

const BarChart = () => {
  return (
    <Grid container spacing={3} alignItems="center" justify="space-between">
      <Grid item xs={7}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <Box>
              <Typography variant="h6">Total Transactions</Typography>
              <Typography variant="body2">Mar 2021</Typography>
              <BarChartGrouped />
            </Box>
          </Padding>
        </Paper>
      </Grid>

      <Grid item xs={5}>
        <Paper elevation={0} variant="outlined">
          <Padding>table</Padding>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BarChart;
