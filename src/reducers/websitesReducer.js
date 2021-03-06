import { 
  NEW_REQUEST, 
  NEW_FETCH_SUCCESS, 
  NEW_ERROR, 
  NEW_POST_SUCCESS,
  DETAILS_HOOK,
  DETAILS_REQUEST,
  UPD_HOOK_SUCCESS,
  DETAILS_CLEAR,
  UPDATE_CLEAR} from '../actions/hooks';

const initialState = {
  websites: [],
  newPost: null,
  loading: false,
  error: null,
  details: [],
  update: null
};  

export const websitesReducer = (state=initialState, action) => {
  if(action.type === NEW_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      newPost: null,
      websites: [],
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

  } else if(action.type === NEW_ERROR){
    return Object.assign({}, state, {
      loading: false, error: action.error
    });

  } else if(action.type === DETAILS_REQUEST){
    return Object.assign({}, state, {
      details: [], 
      error: null
    });

  } else if(action.type === DETAILS_HOOK){
    return Object.assign({}, state, {
      details: [action.details], 
      error: null
    });

  } else if(action.type === UPD_HOOK_SUCCESS){
    return Object.assign({}, state, {
      update: action.web,
      error: null
    });

  } else if(action.type === DETAILS_CLEAR){
    return Object.assign({}, state, {
      details: [],
      error: null
    });

  } else if(action.type === UPDATE_CLEAR){
    return Object.assign({}, state, {
      update: null,
      error: null
    });

  } 
  return state;
};
