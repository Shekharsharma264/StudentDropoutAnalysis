import React from "react";
import { useNavigate } from "react-router-dom";
import DropoutTrendsChart from "../../components/DropoutTrendsChart";

export default function AnalysisHome({ data }) {
  const navigate = useNavigate();

  const analysisSections = [
    { title: "Gender Analysis", path: "/analysis/gender" },
    { title: "Location Analysis", path: "/analysis/location" },
    { title: "School Type Analysis", path: "/analysis/school-type" },
    { title: "Caste Analysis", path: "/analysis/caste" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
        Dropout Analysis Dashboard
      </h1>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {analysisSections.map((section) => (
          <button
            key={section.title}
            onClick={() => navigate(section.path)}
            className="bg-indigo-600 text-white px-6 py-4 rounded-2xl shadow-md text-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Overall Trend Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Dropout Trends Over Years
        </h2>
        <DropoutTrendsChart data={data} />
      </div>
    </div>
  );
}
