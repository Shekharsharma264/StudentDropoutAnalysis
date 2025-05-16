import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function DropoutByGenderChart({ data = [] }) {
  const counts = { Male: 0, Female: 0 };

  data.forEach((row) => {
    const gender = row.Gender?.trim();
    const status = row.Dropout_Status?.trim();

    if (status === 'Dropout' && (gender === 'Male' || gender === 'Female')) {
      counts[gender]++;
    }
  });

  const chartData = [
    { gender: 'Male', count: counts.Male },
    { gender: 'Female', count: counts.Female },
  ];

  return (
    <BarChart width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="gender" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
}

export default DropoutByGenderChart;
