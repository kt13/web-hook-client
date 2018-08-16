import {combineReducers} from 'redux';
import {foodsReducer} from './foodsReducer';
import {mapReducer} from './mapReducer';
import {jwtReducer} from './jwtReducer';

export const rootReducer = combineReducers({
  foodsR: foodsReducer,
  mapR: mapReducer,
  jwtR: jwtReducer
});
