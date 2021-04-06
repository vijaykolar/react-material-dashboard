import React from "react";
import OverviewInfo from "../../Analytics/components/OverviewInfo";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import Padding from "../../hoc/Padding";
import styled from "styled-components";
import LineChart from "../../shared/UI/charts/apex-charts/LineChart";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Finance = () => {
  return (
    <>
      <OverviewInfo title="Finance" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" elevation={0}>
            <Padding>
              <Wrapper>
                <Box>
                  <Typography variant="overline" color="textSecondary">
                    sales
                  </Typography>
                  <Typography variant="h5">$152,996.00</Typography>
                  <Typography variant="caption">
                    vs. $121,420.00 last year
                  </Typography>
                </Box>
                <Box>
                  <LineChart curve="straight" />
                </Box>
              </Wrapper>
            </Padding>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" elevation={0}>
            <Padding>
              <Wrapper>
                <Box>
                  <Typography variant="overline" color="textSecondary">
                    COST
                  </Typography>
                  <Typography variant="h5">$152,996.00</Typography>
                  <Typography variant="caption">
                    vs. $31,392.00 last year
                  </Typography>
                </Box>
                <Box>
                  <LineChart curve="smooth" />
                </Box>
              </Wrapper>
            </Padding>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" elevation={0}>
            <Padding>
              <Wrapper>
                <Box>
                  <Typography variant="overline" color="textSecondary">
                    PROFIT
                  </Typography>
                  <Typography variant="h5">$152,996.00</Typography>
                  <Typography variant="caption">
                    vs. $11,910.00 last year
                  </Typography>
                </Box>
                <Box>
                  <LineChart curve="stepline" />
                </Box>
              </Wrapper>
            </Padding>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          Sales Revenue
        </Grid>
        <Grid item xs={12} md={4}>
          Cost Breakdown
        </Grid>
      </Grid>
    </>
  );
};

export default Finance;
