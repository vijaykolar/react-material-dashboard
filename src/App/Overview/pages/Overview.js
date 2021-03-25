import React from "react";
import OverViewInfo from "../components/OverViewInfo";
import StatsCard from "../components/StatsCard/StatsCard";
import BarChart from "../components/BarChart";
import LatestTransactions from "../components/LatestTransactions";

const Overview = () => {
  return (
    <>
      <OverViewInfo />
      <StatsCard />
      <BarChart />
      <LatestTransactions />
    </>
  );
};

export default Overview;
