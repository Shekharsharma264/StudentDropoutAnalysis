import React, { useEffect, useState } from "react";
import DropoutBySchoolTypeBar from "../../components/SchoolType/DropoutBySchoolTypeBar";
import SchoolPieChart from "../../components/SchoolType/SchoolPieChart";
import SchoolDoughnut from "../../components/SchoolType/SchoolDoughnut";

export default function SchoolTypeAnalysis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dropouts")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching school type data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        School Type-based Dropout Analysis
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <DropoutBySchoolTypeBar data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <SchoolPieChart data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <SchoolDoughnut data={data} />
      </div>
    </div>
  );
}
