import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import MoviesProvider from './context/MoviesProvider.js';


ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

