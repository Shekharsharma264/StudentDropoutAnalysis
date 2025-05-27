import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DropoutBySchoolTypeBar({ data }) {
  const filtered = data.filter(
    (row) => row["School_Type"] && row["Dropout_Status"]
  );

  const schoolTypes = [...new Set(filtered.map((row) => row["School_Type"]))];

  const dropoutRates = schoolTypes.map((type) => {
    const total = filtered.filter((row) => row["School_Type"] === type).length;
    const dropouts = filtered.filter(
      (row) =>
        row["School_Type"] === type && row["Dropout_Status"] === "Dropout"
    ).length;
    return total > 0 ? ((dropouts / total) * 100).toFixed(2) : 0;
  });

  const chartData = {
    labels: schoolTypes,
    datasets: [
      {
        label: "Dropout Rate (%)",
        data: dropoutRates,
        backgroundColor: ["#3B82F6", "#F59E0B"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Dropout Rate by School Type (%)",
      },
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Column Chart</h1>
      <div className="w-full max-w-md h-80 mx-auto">
        <Bar data={chartData} options={options} />;
      </div>
    </div>
  );
}
