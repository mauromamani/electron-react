import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { DEV_MODE } from './constants';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {DEV_MODE ? (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      ) : (
        <HashRouter>
          <App />
        </HashRouter>
      )}
    </Provider>
  </React.StrictMode>
);
