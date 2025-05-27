import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function DropoutByLocationChart({ data }) {
  const counts = { 'Village': 0, 'City/Town': 0 };

  data.forEach((row) => {
    const location = row.Location?.trim();
    const status = row.Dropout_Status?.trim();

    let normalizedLocation = null;
    if (location === 'Rural') normalizedLocation = 'Village';
    else if (location === 'Urban') normalizedLocation = 'City/Town';

    if (status === 'Dropout' && normalizedLocation) {
      counts[normalizedLocation]++;
    }
  });

  const chartData = [
    { location: 'Village', count: counts['Village'] },
    { location: 'City/Town', count: counts['City/Town'] }
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="location"
            label={{ value: 'Area Type (India)', position: 'insideBottom', offset: -5 }}
          />
          <YAxis label={{ value: 'Dropout Count', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="count" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DropoutByLocationChart;
