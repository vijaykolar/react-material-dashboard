import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import Padding from "../../hoc/Padding";
import SalesRevenueLineChart from "./SalesRevenueLineChart";

const SalesRevenue = () => {
  return (
    <Paper elevation={0} variant="outlined">
      <Padding>
        <Typography variant="h6">Sales Revenue</Typography>
      </Padding>
      <Box>
        <SalesRevenueLineChart />
      </Box>
    </Paper>
  );
};

export default SalesRevenue;
