import {combineReducers} from 'redux';
import {foodsReducer} from './foodsReducer';
import {searchReducer} from './searchReducer';
import {mapReducer} from './mapReducer';
import {jwtReducer} from './jwtReducer';

export const rootReducer = combineReducers({
  foodsR: foodsReducer,
  searchR: searchReducer,
  mapR: mapReducer,
  jwtR: jwtReducer
});
