import React from "react";
import ReactApexChart from "react-apexcharts";

const series = [64, 35, 41, 18];
const options = {
  chart: {
    type: "donut",
  },
  colors: ["#49b5f1", "#f35fb1", "#396ed7", "#fb0"],
  labels: ["LinkedIn", "Instagram", "Facebook", "Twitter"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "bottom",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
      labels: {
        enabled: false,
      },
    },
  ],
};
const SocialMediaPieChart = () => {
  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default SocialMediaPieChart;
