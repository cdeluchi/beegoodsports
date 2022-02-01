import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import store from "./redux/store";
import { Provider } from "react-redux"
console.log("Store in Index", store);
ReactDOM.render(
  <Provider store ={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

