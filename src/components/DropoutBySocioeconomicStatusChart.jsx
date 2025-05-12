import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function DropoutBySocioeconomicStatusChart({ data }) {
  const counts = { Low: 0, Moderate: 0, High: 0 };

  data.forEach((row) => {
    const socioStatus = row.Socioeconomic_Status?.trim();
    const status = row.Dropout_Status?.trim();

    if (status === 'Dropout' && ['Low', 'Moderate', 'High'].includes(socioStatus)) {
      counts[socioStatus]++;
    }
  });

  const chartData = [
    { socioStatus: 'Low', count: counts.Low },
    { socioStatus: 'Moderate', count: counts.Moderate },
    { socioStatus: 'High', count: counts.High },
  ];

  return (
    <BarChart width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="socioStatus" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#d88a84" />
    </BarChart>
  );
}

export default DropoutBySocioeconomicStatusChart;
