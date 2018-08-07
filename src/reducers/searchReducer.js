import {NEW_FOOD_SEARCH} from '../actions/foods';

const initialState = {
  listHide: true
};

export const searchReducer = (state=initialState, action) => {
  if(action.type === NEW_FOOD_SEARCH){
    return Object.assign({}, state, {listHide: action.listHide});
  }
  return state;
};
