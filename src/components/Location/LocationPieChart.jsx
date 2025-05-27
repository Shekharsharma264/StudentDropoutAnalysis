import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DropoutByLocationPie({ data }) {
  const locations = [...new Set(data.map((d) => d.Location))];  // Unique locations
  const dropoutCounts = locations.map(
    (location) => data.filter((d) => d.Location === location).length
  );

  const chartData = {
    labels: locations,
    datasets: [
      {
        label: "Dropouts by Location",
        data: dropoutCounts,
        backgroundColor: locations.map((_, index) => `hsl(${(index * 90) % 360}, 70%, 50%)`),
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
        text: "Dropout Distribution by Location",
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
