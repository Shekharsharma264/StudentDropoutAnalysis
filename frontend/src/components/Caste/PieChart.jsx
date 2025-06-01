import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DropoutByCastePie({ data }) {
  const castes = [...new Set(data.map((d) => d.Caste))];  // Unique castes
  const dropoutCounts = castes.map(
    (caste) => data.filter((d) => d.Caste === caste).length
  );

  const chartData = {
    labels: castes,
    datasets: [
      {
        label: "Dropouts by Caste",
        data: dropoutCounts,
        backgroundColor: castes.map((_, index) => `hsl(${(index * 60) % 360}, 70%, 50%)`),
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
        text: "Dropout Distribution by Caste",
      },
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Pie Chart</h1>
      <div className="w-full max-w-md h-80 mx-auto">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}
