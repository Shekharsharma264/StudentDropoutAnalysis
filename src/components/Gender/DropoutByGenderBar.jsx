import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function DropoutByGenderBar({ data }) {
  const genders = ['Male', 'Female'];
  const counts = genders.map(g =>
    data.filter(d => d.Gender === g).length
  );

  const chartData = {
    labels: genders,
    datasets: [
      {
        label: 'Dropouts by Gender',
        data: counts,
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return <Bar data={chartData} />;
}
