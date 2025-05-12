import React from 'react';

function AboutPage() {
  return (
    <div className="about-page">
      <header>
        <h1>About This Project</h1>
      </header>
      <section className="content">
        <h2>Overview</h2>
        <p>This project aims to analyze student dropout trends using various factors such as gender, location, school type, and socioeconomic status. The analysis uses a dataset with real-world information to provide insights into the causes of student dropout.</p>
        
        <h2>Dataset Information</h2>
        <p>The dataset used in this project includes data on student demographics, school information, and dropout status. The analysis includes different visualizations to understand the trends better.</p>

        <h2>Technologies Used</h2>
        <ul>
          <li>React for frontend development</li>
          <li>React Router for page navigation</li>
          <li>Recharts for data visualization</li>
          <li>CSV data parsing using PapaParse</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
