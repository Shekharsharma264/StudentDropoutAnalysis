import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import global styles
import App from './App';  // Import the main App component
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App wrapped with BrowserRouter for routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
