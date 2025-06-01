import React from "react";
import { Bar } from "react-chartjs-2";

export default function DropoutByLocationBar({ data }) {
  const locations = ["Urban", "Rural"];
  const counts = locations.map(
    (loc) => data.filter((d) => d.Location === loc).length
  );

  const chartData = {
    labels: locations,
    datasets: [
      {
        label: "Dropouts by Location",
        data: counts,
        backgroundColor: ["#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Chart Chart</h1>
      <div className="w-full max-w-md h-80 mx-auto">
        <Bar data={chartData} />
      </div>
    </div>
  );
}
