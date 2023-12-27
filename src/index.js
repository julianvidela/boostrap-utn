import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


// Si deseas medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un punto de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
