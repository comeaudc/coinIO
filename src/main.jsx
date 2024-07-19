import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

// Import BrowserRouter and rename it to Router
import { BrowserRouter as Router } from 'react-router-dom';

// Wrap the App component with the Router component to enable the router features.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
