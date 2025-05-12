import Papa from 'papaparse';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AnalysisPage from './pages/AnalysisPage';
import AboutPage from './pages/About';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse('/SIH-Dataset.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/analysis">Analysis</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<AnalysisPage data={data} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
