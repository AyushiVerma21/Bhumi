// ./components/BarChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["1", "2", "3", "4", "5"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 75],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;