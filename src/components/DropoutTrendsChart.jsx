// components/DropoutTrendsChart.js
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export default function DropoutTrendsChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Parse the CSV file from the public directory (ensure this path is correct)
    Papa.parse('/SIH-Dataset.csv', {
      download: true,
      header: true, // Assume the first row contains headers
      complete: (result) => {
        console.log(result);
        const formattedData = processData(result.data);  // Process the raw CSV data
        setData(formattedData);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      },
    });
  }, []);

  const processData = (rawData) => {
    // Create a unique set of years
    const years = [...new Set(rawData.map((d) => d.Standard))];

    // Initialize datasets for different categories
    const datasets = {
      male: [],
      female: [],
      rural: [],
      urban: [],
    };

    years.forEach((year) => {
      const yearData = rawData.filter((d) => d.Standard === year);

      // Filter dropout rates by gender
      datasets.male.push(
        yearData.filter((d) => d.Gender === 'Male').length
      );
      datasets.female.push(
        yearData.filter((d) => d.Gender === 'Female').length
      );

      // Filter dropout rates by location
      datasets.rural.push(
        yearData.filter((d) => d.Location === 'Rural').length
      );
      datasets.urban.push(
        yearData.filter((d) => d.Location === 'Urban').length
      );
    });

    return {
      years,
      datasets,
    };
  };

  // If no data is available, return a loading message
  if (!data) {
    return <p>Loading data...</p>;
  }

  // Chart data for plotting
  const chartData = {
    labels: data.years,
    datasets: [
      {
        label: 'Male Dropout',
        data: data.datasets.male,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192)',
        tension: 0.2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Female Dropout',
        data: data.datasets.female,
        fill: false,
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgb(153, 102, 255)',
        tension: 0.2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Rural Dropout',
        data: data.datasets.rural,
        fill: false,
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgb(255, 159, 64)',
        tension: 0.2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Urban Dropout',
        data: data.datasets.urban,
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)',
        tension: 0.2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Dropout Rate Trends Over Years',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
