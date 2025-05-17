import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">About This Project</h1>

      <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">🎯 Purpose</h2>
          <p className="text-gray-700 leading-relaxed">
            The Student Dropout Analysis project aims to identify patterns and factors that contribute to student dropouts in Indian schools. By visualizing and analyzing data, it helps educators and policymakers take informed steps to reduce dropout rates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React JS (Frontend)</li>
            <li>Tailwind CSS (Styling)</li>
            <li>Recharts (Data Visualization)</li>
            <li>No backend — static data-based analysis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">📊 Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Gender-wise dropout charts</li>
            <li>Grade and age-based analysis</li>
            <li>Dropout reason visualization</li>
            <li>Fully responsive UI</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">👨‍💻 Developer</h2>
          <p className="text-gray-700">
            This project is built by <span className="font-medium">Chandu</span> as part of a college submission. The goal was to make it easy to understand, visually rich, and impactful.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
