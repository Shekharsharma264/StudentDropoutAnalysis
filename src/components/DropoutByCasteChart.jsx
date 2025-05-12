import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function DropoutByCasteChart({ data }) {
  const counts = { SC: 0, ST: 0, OBC: 0, General: 0 };

  data.forEach((row) => {
    const caste = row.Caste?.trim();
    const status = row.Dropout_Status?.trim();

    if (status === 'Dropout' && ['SC', 'ST', 'OBC', 'General'].includes(caste)) {
      counts[caste]++;
    }
  });

  const chartData = [
    { caste: 'SC', count: counts.SC },
    { caste: 'ST', count: counts.ST },
    { caste: 'OBC', count: counts.OBC },
    { caste: 'General', count: counts.General },
  ];

  return (
    <BarChart width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="caste" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#84d88f" />
    </BarChart>
  );
}

export default DropoutByCasteChart;
