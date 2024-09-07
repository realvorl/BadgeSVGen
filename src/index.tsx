import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter from React Router
import './components/App/App.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter basename='/BadgeSVGen'>  {/* Wrap the App in BrowserRouter */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
