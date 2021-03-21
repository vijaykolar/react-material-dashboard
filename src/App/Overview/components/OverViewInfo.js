import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { HiPlusSm } from "react-icons/all";
import styled from "styled-components";

const FlexBox = styled(Box)`
  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Mt16 = styled(Box)`
  margin-top: 16px;

  @media (min-width: 960px) {
    margin-top: 0;
  }
`;

const OverViewInfo = () => {
  return (
    <Grid container spacing={3} alignItems="center" justify="space-between">
      <Grid item xs={12}>
        <FlexBox>
          <Box>
            <Typography variant="overline">OVERVIEW</Typography>
            <Typography variant="h5" color="textPrimary">
              Good Morning, Vijay
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Here's what's happening with your projects today
            </Typography>
          </Box>
          <Mt16>
            <Button
              color="primary"
              variant="contained"
              startIcon={<HiPlusSm />}
            >
              New Transaction
            </Button>
          </Mt16>
        </FlexBox>
      </Grid>
    </Grid>
  );
};

export default OverViewInfo;
