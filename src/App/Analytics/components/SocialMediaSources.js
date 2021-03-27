import React from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import Padding from "../../hoc/Padding";
import SocialMediaPieChart from "./SocialMediaPieChart";
import { MdArrowForward } from "react-icons/all";

const SocialMediaSources = () => {
  return (
    <Paper elevation={0} variant={"outlined"}>
      <Padding>
        <Typography variant={"h6"}>Social Media Sources</Typography>
      </Padding>
      <SocialMediaPieChart />
      <Box style={{ backgroundColor: "rgb(244, 245, 247)", marginTop: 16 }}>
        <Padding>
          <Button
            color="primary"
            style={{ textTransform: "initial" }}
            startIcon={<MdArrowForward />}
          >
            See all visits
          </Button>
        </Padding>
      </Box>
    </Paper>
  );
};

export default SocialMediaSources;
