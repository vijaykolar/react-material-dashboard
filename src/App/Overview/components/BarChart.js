import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import styled from "styled-components";

const Mt16 = styled(Box)`
  margin-top: 16px;

  @media (min-width: 960px) {
    margin-top: 0;
  }
`;

const BarChart = () => {
  return (
    <Grid container spacing={3} alignItems="center" justify="space-between">
      <Grid item xs={7}>
        <Paper>
          <Box>Bar Goes here</Box>
        </Paper>
      </Grid>

      <Grid item xs={5}>
        <Paper>
          <Mt16>table goes here</Mt16>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BarChart;
