import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import './assets/boxicons-2.1.4/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout.jsx'

document.title = 'HỆ THỐNG QUẢN LÝ SINH VIÊN'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

reportWebVitals();
