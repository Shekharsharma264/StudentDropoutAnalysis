import React, { useEffect, useState } from "react";
import GenderColumn from "../../components/Gender/GenderColumn";
import GenderDoughnut from "../../components/Gender/GenderDoughnut";
import GenderpieChart from "../../components/Gender/GenderpieChart";

export default function GenderAnalysis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dropouts")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Gender-Based Dropout Analysis
      </h1>
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto mb-10">
        <GenderColumn data={data} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto mb-10">
        <GenderDoughnut data={data} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto">
        <GenderpieChart data={data} />
      </div>
    </div>
  );
}
