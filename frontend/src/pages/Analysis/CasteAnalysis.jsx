import React, { useEffect, useState } from "react";
import DropoutByCasteBar from "../../components/Caste/ColumnChart";
import CasteRatioPie from "../../components/Caste/PieChart";
import CasteDoughnut from "../../components/Caste/DoughnutChart";

export default function CasteAnalysis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dropouts")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching caste data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Caste-based Dropout Analysis
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <DropoutByCasteBar data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <CasteRatioPie data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <CasteDoughnut data={data} />
      </div>
    </div>
  );
}
