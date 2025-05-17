import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Papa from "papaparse";
import Home from "./pages/Home";
import AnalysisPage from "./pages/AnalysisPage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";
import Feedback from "./pages/Feedback";

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
          <Route path="/analysis" element={<AnalysisPage data={data} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
