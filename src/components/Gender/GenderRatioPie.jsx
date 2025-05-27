import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function GenderRatioPie({ data }) {
  const male = data.filter(d => d.Gender === 'Male').length;
  const female = data.filter(d => d.Gender === 'Female').length;

  const chartData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [male, female],
        backgroundColor: ['#4bc0c0', '#ff6384'],
      },
    ],
  };

  return <Pie data={chartData} />;
}
