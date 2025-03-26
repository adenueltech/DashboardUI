import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Dashboard from "./Dashboard";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "./components/ThemeProvider";  // ✅ Use named import
// Import ThemeProvider
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        
        <Dashboard />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
