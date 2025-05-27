import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function DropoutByCasteBar({ data }) {
  const castes = ['SC', 'ST', 'OBC', 'General'];
  const counts = castes.map(caste =>
    data.filter(d => d.Caste === caste).length
  );

  const chartData = {
    labels: castes,
    datasets: [
      {
        label: 'Dropouts by Caste',
        data: counts,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#9966FF'],
      },
    ],
  };

  return <Bar data={chartData} />;
}
