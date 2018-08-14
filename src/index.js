import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import {rootReducer as comboReducer} from './reducers/comboReducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'; 
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const store = createStore(comboReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
