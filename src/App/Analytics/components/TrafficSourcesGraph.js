import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Padding from "../../hoc/Padding";
import LineGraph from "./LineGraph";

const TrafficSourcesGraph = () => {
  return (
    <Paper elevation={0} variant="outlined">
      <Padding>
        <Typography variant={"h6"}>Traffic Sources</Typography>
      </Padding>
      <LineGraph />
    </Paper>
  );
};

export default TrafficSourcesGraph;
