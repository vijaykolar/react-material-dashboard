import React from "react";
import { Grid } from "@material-ui/core";

import OverviewInfo from "../components/OverviewInfo";
import AnalyticCards from "../components/AnalyticCards";
import CountryTable from "../components/CountryTable";
import TrafficSourcesGraph from "../components/TrafficSourcesGraph";
import MostVisited from "../components/MostVisited";
import SocialMediaSources from "../components/SocialMediaSources";

const Analytics = () => {
  return (
    <>
      <OverviewInfo title="Analytics" />
      <AnalyticCards />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TrafficSourcesGraph />
        </Grid>
        <Grid item xs={12} md={4}>
          <CountryTable />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <MostVisited />
        </Grid>
        <Grid item xs={12} md={4}>
          <SocialMediaSources />
        </Grid>
      </Grid>
    </>
  );
};

export default Analytics;
