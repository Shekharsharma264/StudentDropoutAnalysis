import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart elements
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DropoutTrendsChart({ data }) {
  // Get unique standards (classes) sorted
  const standards = [...new Set(data.map((d) => parseInt(d.Standard)))].sort((a, b) => a - b);

  // Helper function to count dropouts based on filter (e.g., Gender, School Type)
  const countDropouts = (std, filter) =>
    data.filter(
      (d) =>
        parseInt(d.Standard) === std &&
        d.Dropout_Status === "Dropout" &&
        filter(d)
    ).length;

  // Prepare datasets for different filters (Gender, School Type, Location, Socioeconomic Status)
  const maleData = standards.map((std) => countDropouts(std, (d) => d.Gender === "Male"));
  const femaleData = standards.map((std) => countDropouts(std, (d) => d.Gender === "Female"));
  const govtData = standards.map((std) => countDropouts(std, (d) => d.School_Type === "Government"));
  const privateData = standards.map((std) => countDropouts(std, (d) => d.School_Type === "Private"));
  const ruralData = standards.map((std) => countDropouts(std, (d) => d.Location === "Rural"));
  const lowSEData = standards.map((std) => countDropouts(std, (d) => d.Socioeconomic_Status === "Low"));

  // Chart data configuration
  const chartData = {
    labels: standards.map((s) => `Class ${s}`), // X-axis labels (Class Standard)
    datasets: [
      {
        label: "Male",
        data: maleData,
        borderColor: "#36A2EB",
        backgroundColor: "#36A2EB",
        tension: 0.4,
      },
      {
        label: "Female",
        data: femaleData,
        borderColor: "#FF6384",
        backgroundColor: "#FF6384",
        tension: 0.4,
      },
      {
        label: "Government",
        data: govtData,
        borderColor: "#4BC0C0",
        backgroundColor: "#4BC0C0",
        borderDash: [5, 5],
        tension: 0.4,
      },
      {
        label: "Private",
        data: privateData,
        borderColor: "#9966FF",
        backgroundColor: "#9966FF",
        borderDash: [5, 5],
        tension: 0.4,
      },
      {
        label: "Rural",
        data: ruralData,
        borderColor: "#FF9F40",
        backgroundColor: "#FF9F40",
        tension: 0.4,
      },
      {
        label: "Low Socioeconomic",
        data: lowSEData,
        borderColor: "#FFCD56",
        backgroundColor: "#FFCD56",
        tension: 0.4,
      },
    ],
  };

  // Chart options configuration
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" }, // Legend at the bottom
      title: {
        display: true,
        text: "Dropout Trends by Class (Standard)", // Title of the chart
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Number of Dropouts" }, // Y-axis title
      },
      x: {
        title: { display: true, text: "Class Standard" }, // X-axis title
      },
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dropout Trends by Standard</h1>
      <div className="w-full max-w-4xl mx-auto">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
