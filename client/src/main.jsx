import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App.jsx';
import { SearchContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
)
