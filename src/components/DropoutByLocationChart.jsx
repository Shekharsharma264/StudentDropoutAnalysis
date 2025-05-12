import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function DropoutByLocationChart({ data }) {
  const counts = { Rural: 0, Urban: 0 };

  data.forEach((row) => {
    const location = row.Location?.trim();
    const status = row.Dropout_Status?.trim();

    if (status === 'Dropout' && (location === 'Rural' || location === 'Urban')) {
      counts[location]++;
    }
  });

  const chartData = [
    { location: 'Rural', count: counts.Rural },
    { location: 'Urban', count: counts.Urban },
  ];

  return (
    <BarChart width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="location" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
}

export default DropoutByLocationChart;
