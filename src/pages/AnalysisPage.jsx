import React, { useEffect, useState } from 'react';
import DropoutByGenderChart from '../components/DropoutByGenderChart';
import DropoutBySchoolTypeChart from '../components/DropoutBySchoolTypeChart';
import DropoutByLocationChart from '../components/DropoutByLocationChart';
import DropoutBySocioeconomicStatusChart from '../components/DropoutBySocioeconomicStatusChart';
import DropoutByCasteChart from '../components/DropoutByCasteChart';
import Papa from 'papaparse';

function AnalysisPage() {
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
    <div className="analysis-page">
      <header>
        <h1>Student Dropout Analysis</h1>
      </header>
      <section className="charts">
        <DropoutByGenderChart data={data} />
        <DropoutBySchoolTypeChart data={data} />
        <DropoutByLocationChart data={data} />
        <DropoutBySocioeconomicStatusChart data={data} />
        <DropoutByCasteChart data={data} />
      </section>
    </div>
  );
}

export default AnalysisPage;
