import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './redux/reducer';


ReactDOM.render(
  <Router>
  <Provider store={store}>
  <App />
  </Provider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();

