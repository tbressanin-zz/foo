import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importing Font Awesome Font Pack
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importing MDB Bootstrap
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);