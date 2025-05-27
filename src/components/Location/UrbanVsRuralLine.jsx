import React from 'react';
import { Line } from 'react-chartjs-2';

export default function UrbanVsRuralLine({ data }) {
  const years = [...new Set(data.map(d => d.Standard))];

  const urbanCounts = years.map(
    year => data.filter(d => d.Standard === year && d.Location === 'Urban').length
  );

  const ruralCounts = years.map(
    year => data.filter(d => d.Standard === year && d.Location === 'Rural').length
  );

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Urban',
        data: urbanCounts,
        borderColor: '#36A2EB',
        fill: false,
      },
      {
        label: 'Rural',
        data: ruralCounts,
        borderColor: '#FFCE56',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}
