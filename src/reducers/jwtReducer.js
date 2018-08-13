import {
  AUTH_SET,
  // CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  // AUTH_WARNING
} from '../actions/jwtauth';

const initialState = {
  warning: false,
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null
};

export const  jwtReducer = (state = initialState, action) => {
  if (action.type === AUTH_SET) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  // } else if (action.type === CLEAR_AUTH) {
  //   return Object.assign({}, state, {
  //     authToken: null,
  //     currentUser: null
  //   });
  } else if (action.type === AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === AUTH_SUCCESS) {
    console.log(action.data, 'jwt');
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser
    });
  } else if (action.type === AUTH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  // } else if (action.type === AUTH_WARNING) {
  //   return Object.assign({}, state, {
  //     warning: true
  //   });
  }
  return state;
};
