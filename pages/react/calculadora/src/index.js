import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './main/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <h1> Calculator :D</h1>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
