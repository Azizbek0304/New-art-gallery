import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux'; // Import Provider from react-redux
// import store from './store'; // Import your Redux store
import App from './App';

createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);
