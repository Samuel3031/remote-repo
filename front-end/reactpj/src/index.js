// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // 改為引入 App.jsx
import './index.css';  // 添加樣式（可選）

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
