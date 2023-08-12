import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

const Chart = ({ borderColor, backgroundColor }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const data = {
    labels: ["Jan", "Mar", "May", "July", "Oct"],
    datasets: [
      {
        data: [5000, 100, 4000, 8000, 500],
        fill: true,
        backgroundColor: backgroundColor,
        pointBorderColor: "#23ca99",
        pointBorderWidth: 0,
        borderColor: borderColor,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default Chart;
