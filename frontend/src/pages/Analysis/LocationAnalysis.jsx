import React, { useEffect, useState } from "react";
import DropoutByLocationBar from "../../components/Location/DropoutByLocationBar";
import LocationPieChart from "../../components/Location/LocationPieChart";
import LocationDoughnut from "../../components/Location/LocationDoughnut";

export default function LocationAnalysis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dropouts")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching location data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Location-based Dropout Analysis
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <DropoutByLocationBar data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <LocationPieChart data={data} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <LocationDoughnut data={data} />
      </div>
    </div>
  );
}
