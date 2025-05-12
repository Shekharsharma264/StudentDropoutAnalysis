import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to the Student Dropout Analysis</h1>
        <p>This project analyzes the factors influencing student dropouts across different regions, school types, and socioeconomic statuses.</p>
      </header>

      <section className="intro">
        <h2>Explore the Analysis</h2>
        <p>Visualize how factors like gender, school type, and socioeconomic status contribute to student dropout rates.</p>

        <nav>
          <ul>
            <li><Link to="/analysis">Go to Analysis</Link></li>
            <li><Link to="/about">Learn More About the Project</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Home;
