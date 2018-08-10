import {combineReducers} from 'redux';
import {foodsReducer} from './foodsReducer';
import {searchReducer} from './searchReducer';
import {zipReducer} from './mapReducer';

export const rootReducer = combineReducers({
  foodsR: foodsReducer,
  searchR: searchReducer,
  zipR: zipReducer
});
