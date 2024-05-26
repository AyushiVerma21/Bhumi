// ./components/PieChart.js
import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["1", "2", "3", "4", "5"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2, 20, 75],
    },
  ],
};
const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;
