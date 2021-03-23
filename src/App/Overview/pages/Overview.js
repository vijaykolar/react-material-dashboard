import React from "react";
import OverViewInfo from "../components/OverViewInfo";
import StatsCard from "../components/StatsCard/StatsCard";
import BarChart from "../components/BarChart";

const Overview = () => {
  return (
    <>
      <OverViewInfo />
      <StatsCard />
      <BarChart />
    </>
  );
};

export default Overview;
