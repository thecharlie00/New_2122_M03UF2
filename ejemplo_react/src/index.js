import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Titulito from './Titulito';
import Piesito from './Piesito';
import Plantilla from './Plantilla'


ReactDOM.render(
  <React.StrictMode>
  <Plantilla />
  <Titulito />
    <App />
	<Piesito />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
