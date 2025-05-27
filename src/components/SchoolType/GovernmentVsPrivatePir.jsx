import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function GovernmentVsPrivatePie({ data }) {
  const govt = data.filter(d => d['School Type'] === 'Government').length;
  const priv = data.filter(d => d['School Type'] === 'Private').length;

  const chartData = {
    labels: ['Government', 'Private'],
    datasets: [
      {
        data: [govt, priv],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return <Pie data={chartData} />;
}
