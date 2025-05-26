import React from 'react';
import { Line } from 'react-chartjs-2';

export default function SCSTDropRateLine({ data }) {
  const years = [...new Set(data.map(d => d.Standard))];

  const scCounts = years.map(
    year => data.filter(d => d.Standard === year && d.Caste === 'SC').length
  );

  const stCounts = years.map(
    year => data.filter(d => d.Standard === year && d.Caste === 'ST').length
  );

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'SC Dropouts',
        data: scCounts,
        borderColor: '#FF6384',
        fill: false,
      },
      {
        label: 'ST Dropouts',
        data: stCounts,
        borderColor: '#36A2EB',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}
