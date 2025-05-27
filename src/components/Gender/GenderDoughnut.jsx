import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DropoutByGenderDoughnut({ data }) {
  const genders = ["Male", "Female"];
  const dropoutCounts = genders.map(
    (gender) => data.filter((d) => d.Gender === gender).length
  );

  const chartData = {
    labels: genders,
    datasets: [
      {
        label: "Dropouts",
        data: dropoutCounts,
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Dropout Distribution by Gender",
      },
    },
  };

  return (
    <div>
        <h1 className="text-2xl font-bold">Doughnut Chart</h1>
      <div className="w-100 h-80 mx-auto">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
}
