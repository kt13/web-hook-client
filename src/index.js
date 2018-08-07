import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {rootReducer as comboReducer} from './reducers/comboReducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'; 
import {Provider} from 'react-redux';

const store = createStore(comboReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
