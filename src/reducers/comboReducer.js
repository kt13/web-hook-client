import {combineReducers} from 'redux';
import {foodsReducer} from './foodsReducer';

export const rootReducer = combineReducers({

  foodsR: foodsReducer,
  
});
