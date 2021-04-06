import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Padding from "../../hoc/Padding";
import CostBreakdownRadialChart from "./CostBreakdownRadialChart";

const CostBreakdown = () => {
  return (
    <Paper variant="outlined" elevation={0}>
      <Padding>
        <Typography variant="h6">Cost Breakdown</Typography>
      </Padding>
      <CostBreakdownRadialChart />
    </Paper>
  );
};

export default CostBreakdown;
