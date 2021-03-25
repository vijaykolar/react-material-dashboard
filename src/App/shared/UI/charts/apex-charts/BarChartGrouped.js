import React from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    type: "bar",
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      borderRadius: 8,
      horizontal: false,
    },
    dataLabels: {
      enabled: false,
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2011 GMT",
      "01/02/2011 GMT",
      "01/03/2011 GMT",
      "01/04/2011 GMT",
      "01/05/2011 GMT",
      "01/06/2011 GMT",
    ],
  },
  yaxis: {
    labels: {
      formatter: (value) => {
        return value === 0 ? 0 : value + "k";
      },
    },
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

const series = [
  {
    name: "Ford",
    data: [44, 55, 41, 67, 22, 43],
  },
  {
    name: "Ferrari",
    data: [13, 23, 20, 8, 13, 27],
  },
];

const BarChartGrouped = () => {
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default BarChartGrouped;
