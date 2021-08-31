import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index';
import GlobalStyle from './Styles/globalStyle'
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
