import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = (props) => {
  const series = [
    {
      name: "Desktops",
      data: [10, 3, 9, 4, 6, 14, 3, 6],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#6b79e2"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    // title: {
    //   text: "Product Trends by Month",
    //   align: "left",
    // },
    grid: {
      show: false,
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
  };
  const updatedOptions = {
    ...options,
    stroke: {
      curve: props.curve || "curved",
      width: 3,
    },
  };
  return (
    <div>
      <ReactApexChart
        options={updatedOptions}
        series={series}
        type="line"
        height={80}
      />
    </div>
  );
};

export default LineChart;
