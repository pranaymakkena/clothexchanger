import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/style.css';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
