import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import {Router, browserHistory, hasHistory} from 'react-router'

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider >
    <Router history={hasHistory} />
  </Provider>,
  document.getElementById('root')
);
