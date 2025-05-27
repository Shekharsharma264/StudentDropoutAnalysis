import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Papa from "papaparse";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Feedback from "./pages/Feedback";
import Layout from "./components/Layout";

// Analysis pages
import AnalysisHome from "./pages/analysis/AnalysisHome";
import GenderAnalysis from "./pages/analysis/GenderAnalysis";
import LocationAnalysis from "./pages/analysis/LocationAnalysis";
import SchoolTypeAnalysis from "./pages/analysis/SchoolTypeAnalysis";
import CasteAnalysis from "./pages/analysis/CasteAnalysis";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("/SIH-Dataset.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/feedback" element={<Feedback />} />

          {/* Analysis Routes */}
          <Route path="/analysis" element={<AnalysisHome data={data} />} />
          <Route path="/analysis/gender" element={<GenderAnalysis data={data} />} />
          <Route path="/analysis/location" element={<LocationAnalysis data={data} />} />
          <Route path="/analysis/school-type" element={<SchoolTypeAnalysis data={data} />} />
          <Route path="/analysis/caste" element={<CasteAnalysis data={data} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
