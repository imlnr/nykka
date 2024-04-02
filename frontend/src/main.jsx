import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ChakraProvider } from '@chakra-ui/react';

// Uncomment this line if you have properly set up your environment variable
// const clientId = process.env.CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <GoogleOAuthProvider clientId="29787571856-dqsifnqon7r2vi90qoaif8n80276l5vr.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
