import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropoutTrendsChart from "../../components/DropoutTrendsChart";

export default function AnalysisHome() {
  const [data, setData] = useState([]);
  const [gender, setGender] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const analysisSections = [
    { title: "Gender Analysis", path: "/analysis/gender" },
    { title: "Location Analysis", path: "/analysis/location" },
    { title: "School Type Analysis", path: "/analysis/school-type" },
    { title: "Caste Analysis", path: "/analysis/caste" },
  ];

useEffect(() => {
  fetch("http://localhost:5000/api/dropouts")
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((err) => console.error("Fetch error:", err));
}, []);


  const filteredData = data.filter(
    (d) =>
      (gender === "" || d.Gender === gender) &&
      (schoolType === "" || d.School_Type === schoolType) &&
      (location === "" || d.Location === location)
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
        Dropout Analysis Dashboard
      </h1>

      {/* Filter Dropdowns */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="px-4 py-2 rounded-xl shadow border"
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          value={schoolType}
          onChange={(e) => setSchoolType(e.target.value)}
          className="px-4 py-2 rounded-xl shadow border"
        >
          <option value="">All School Types</option>
          <option value="Government">Government</option>
          <option value="Private">Private</option>
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 rounded-xl shadow border"
        >
          <option value="">All Locations</option>
          <option value="Urban">Urban</option>
          <option value="Rural">Rural</option>
        </select>
      </div>

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
        <DropoutTrendsChart data={filteredData} />
      </div>
    </div>
  );
}
