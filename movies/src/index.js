import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import MoviesProvider from './context/MoviesProvider.js';
import ReviewsProvider from './context/ReviewsProvider';


ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <ReviewsProvider>
        <App />
      </ReviewsProvider>
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

