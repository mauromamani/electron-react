import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { DEV_MODE } from './constants';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {DEV_MODE ? (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ) : (
      <HashRouter>
        <App />
      </HashRouter>
    )}
  </React.StrictMode>
);
