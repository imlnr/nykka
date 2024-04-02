import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

// Uncomment this line if you have properly set up your environment variable
// const clientId = process.env.CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <App />
  </React.StrictMode>
);
