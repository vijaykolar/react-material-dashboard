import React from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    type: "radialBar",
  },
  colors: ["#54cee0"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 10,
        size: "70%",
        imageWidth: 150,
      },
      dataLabels: {
        show: false,
      },
    },
  },
  stroke: {
    lineCap: "round",
    // width: ,
  },
  labels: ["Cricket"],
};

const RadialProgress = () => {
  return (
    <div>
      <ReactApexChart
        options={options}
        series={[85]}
        type="radialBar"
        height={150}
      />
    </div>
  );
};

export default RadialProgress;
