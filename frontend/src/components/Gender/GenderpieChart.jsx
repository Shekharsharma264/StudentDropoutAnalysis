import React from "react";
import { Pie } from "react-chartjs-2";

export default function GenderRatioPie({ data }) {
  const male = data.filter((d) => d.Gender === "Male").length;
  const female = data.filter((d) => d.Gender === "Female").length;

  const chartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [male, female],
        backgroundColor: ["#4bc0c0", "#ff6384"],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Pie Chart</h1>
      <div className="w-100 h-80 mx-auto">
        <Pie data={chartData} />
      </div>
    </div>
  );
}
