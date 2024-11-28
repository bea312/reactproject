// src/main.tsx (or src/main.jsx if you're using JavaScript)
import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18+
import App from './App';
import './index.css';

// Ensure that the root element is being accessed correctly and is typed properly
const rootElement = document.getElementById('root'); 

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
