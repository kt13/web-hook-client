import { 
  NEW_REQUEST, 
  NEW_FETCH_SUCCESS, 
  NEW_ERROR, 
  EXPAND_RESULT, 
  NEW_FOOD_SEARCH,
  NEW_POST_SUCCESS,
  NEW_SEARCH_TERM,
  FETCH_FOODS_ZERO,
  DELETE_HOOK} from '../actions/hooks';

const initialState = {
  websites: [],
  newPost: null,
  loading: false,
  error: null,
  expandFood: false,
  searchListHide: true,
  allergens: [],
  searchTerm: null,
  zero: false,
  deletes: []
};  

export const websitesReducer = (state=initialState, action) => {
  if(action.type === NEW_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      newPost: null,
      websites: []
    });
  } else if(action.type === NEW_POST_SUCCESS){
    // console.log(action.foods);
    return Object.assign({}, state, {
      newPost: action.website,
    });

  } else if(action.type === NEW_FETCH_SUCCESS){
    // console.log(action.foods);
    return Object.assign({}, state, {
      websites: [...action.list]
    });
          
    // action.data.map(item => state.foods[item])]});
  } else if(action.type === NEW_FOOD_SEARCH){
    return Object.assign({}, state, {
      searchListHide: action.listHide,
      zero: false
    });
  
  } else if(action.type === NEW_SEARCH_TERM){
    return Object.assign({}, state, {
      searchTerm: action.search,
      zero: false
    });

  } else if(action.type === EXPAND_RESULT){
    return Object.assign({}, state, {
      expandFood: action.torf
    });

  } else if(action.type === NEW_ERROR){
    return Object.assign({}, state, {
      loading: false, error: action.error
    });
  
  } else if(action.type === FETCH_FOODS_ZERO){
    return Object.assign({}, state, {
      zero: true, error: null
    });

  } else if(action.type === DELETE_HOOK){
    return Object.assign({}, state, {
      deletes: [...state.deletes, action.deleted], 
      error: null
    });

  } 
  return state;
};
