import {combineReducers} from 'redux';
import {websitesReducer} from './websitesReducer';

export const rootReducer = combineReducers({

  websitesR: websitesReducer,
  
});
