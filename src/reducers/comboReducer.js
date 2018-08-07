import {combineReducers} from 'redux';
import {foodsReducer} from './foodsReducer';
import {searchReducer} from './searchReducer';

export const rootReducer = combineReducers({
  foodsR: foodsReducer,
  searchR: searchReducer
});
