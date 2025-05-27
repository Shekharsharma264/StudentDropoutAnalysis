import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DropoutBySchoolTypePie({ data }) {
  const schoolTypes = [...new Set(data.map((d) => d.School_Type))];  // Unique school types
  const dropoutCounts = schoolTypes.map(
    (schoolType) => data.filter((d) => d.School_Type === schoolType).length
  );

  const chartData = {
    labels: schoolTypes,
    datasets: [
      {
        label: "Dropouts by School Type",
        data: dropoutCounts,
        backgroundColor: schoolTypes.map((_, index) => `hsl(${(index * 120) % 360}, 70%, 50%)`),
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
        text: "Dropout Distribution by School Type",
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
