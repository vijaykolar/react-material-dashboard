import React from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },

    toolbar: {
      show: false,
    },
  },
  colors: ["#5664d2", "rgb(255, 172, 51)"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  grid: {
    strokeDashArray: 4,
    // row: {
    //   colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
    //   opacity: 0.5,
    // },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    labels: {
      formatter: (value) => {
        return value === 0 ? value : value + "K";
      },
    },
  },
  markers: {
    size: 4,
    hover: {
      size: 6,
    },
  },
};
const series = [
  {
    name: "High - 2013",
    data: [10, 50, 32, 100, 78, 21, 33, 82, 9, 63, 38, 93],
  },
  {
    name: "High - 2012",
    data: [40, 65, 9, 72, 92, 83, 45, 9, 22, 32, 19, 53],
  },
];

const LineGraph = () => {
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={450}
      />
    </div>
  );
};

export default LineGraph;
