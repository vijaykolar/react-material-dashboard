import React from "react";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import { MdArrowForward } from "react-icons/all";

import Padding from "../../hoc/Padding";
import BarChartGrouped from "../../shared/UI/charts/apex-charts/BarChartGrouped";
import FlexBox from "../../hoc/FlexBox";

const Stats = styled.span`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.loss ? "rgb(255, 64, 129)" : "rgb(51, 187, 120)"};
  margin-right: 10px;
`;

const BarChart = () => {
  return (
    <Grid container spacing={3} alignItems="center" justify="space-between">
      <Grid item xs={12} md={7}>
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

      <Grid item xs={12} md={5}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <Box>
              <Typography variant="overline">TOTAL BALANCE</Typography>
              <Typography variant="h4">$3,787,681.00</Typography>
            </Box>
          </Padding>
          <Divider />
          <Padding>
            <Box>
              <Typography variant="overline">AVAILABLE CURRENCY</Typography>
            </Box>
            <List>
              <ListItem disableGutters>
                <Stats loss />
                <ListItemText
                  primary={
                    <Typography variant="subtitle2" component="span">
                      US Dollars
                    </Typography>
                  }
                />
                <Typography
                  style={{ marignLeft: "auto" }}
                  variant="body2"
                  component="span"
                >
                  $21,500.00
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Stats />
                <ListItemText
                  primary={
                    <Typography variant="subtitle2" component="span">
                      Bitcoin
                    </Typography>
                  }
                />
                <Typography
                  style={{ marignLeft: "auto" }}
                  variant="body2"
                  component="span"
                >
                  $10,831.00
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Stats loss />
                <ListItemText
                  primary={
                    <Typography variant="subtitle2" component="span">
                      XRP Ripple
                    </Typography>
                  }
                />
                <Typography
                  style={{ marignLeft: "auto" }}
                  variant="body2"
                  component="span"
                >
                  $9,2051.00
                </Typography>
              </ListItem>
            </List>
          </Padding>
          <Divider />
          <Padding>
            <FlexBox>
              <Button
                style={{ textTransform: "capitalize" }}
                color="primary"
                endIcon={<MdArrowForward />}
              >
                Add money
              </Button>
              <Button
                style={{ textTransform: "capitalize" }}
                color="primary"
                endIcon={<MdArrowForward />}
              >
                Withdraw funds
              </Button>
            </FlexBox>
          </Padding>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BarChart;
