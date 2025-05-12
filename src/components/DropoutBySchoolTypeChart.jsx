import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function DropoutBySchoolTypeChart({ data }) {
  const counts = { Government: 0, Private: 0 };

  data.forEach((row) => {
    const schoolType = row.School_Type?.trim();
    const status = row.Dropout_Status?.trim();

    if (status === 'Dropout' && (schoolType === 'Government' || schoolType === 'Private')) {
      counts[schoolType]++;
    }
  });

  const chartData = [
    { schoolType: 'Government', count: counts.Government },
    { schoolType: 'Private', count: counts.Private },
  ];

  return (
    <BarChart width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="schoolType" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>
  );
}

export default DropoutBySchoolTypeChart;
