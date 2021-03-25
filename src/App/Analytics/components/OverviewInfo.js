import React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import {
  HiOutlineChevronDown,
  HiDownload,
  MdChevronRight,
} from "react-icons/all";
import styled from "styled-components";

import FlexBox from "../../hoc/FlexBox";
import { Link as a } from "react-router-dom";

const Mt16 = styled(Box)`
  margin-top: 16px;

  @media (min-width: 960px) {
    margin-top: 0;
  }
`;

const OverviewInfo = () => {
  return (
    <Grid container spacing={3} alignItems="center" justify="space-between">
      <Grid item xs={12}>
        <FlexBox>
          <Box>
            <Typography variant="h5" color="textPrimary">
              Analytics
            </Typography>
            <Breadcrumbs separator={<MdChevronRight fontSize="large" />}>
              <Link color="textPrimary" component={a} to="/">
                Dashboard
              </Link>
              <Typography color="textSecondary">Analytics</Typography>
            </Breadcrumbs>
          </Box>
          <Mt16>
            <Button
              style={{ textTransform: "initial", marginRight: 16 }}
              color="primary"
              variant="outlined"
              endIcon={<HiDownload />}
            >
              Export
            </Button>
            <Button
              style={{ textTransform: "initial" }}
              color="primary"
              variant="contained"
              endIcon={<HiOutlineChevronDown />}
            >
              Last month
            </Button>
          </Mt16>
        </FlexBox>
      </Grid>
    </Grid>
  );
};

export default OverviewInfo;
