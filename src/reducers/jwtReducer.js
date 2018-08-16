import {
  AUTH_SET,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  // REGISTER_SUCCESS,
  // AUTH_WARNING
} from '../actions/jwtauth';

const initialState = {
  warning: false,
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null,
  /*  registered: false */
};

export const  jwtReducer = (state = initialState, action) => {
  // console.log(state.currentUser, 'currentUser');
  // console.log(state.authToken, 'authToken');
  if (action.type === AUTH_SET) {
    return Object.assign({}, state, {
      authToken: action.token
    });

  } else if (action.type === CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null
    });

  } else if (action.type === AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });

  } else if (action.type === AUTH_SUCCESS) {
    // console.log(action.user, 'jwt');
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.user
    });

  } else if (action.type === AUTH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });

  // } else if(action.type === REGISTER_SUCCESS){
  //   return Object.assign({}, state, {
  //     loading: false,
  //     error: null,
  //     registered: action.status
  //   });

  // } else if (action.type === AUTH_WARNING) {
  //   return Object.assign({}, state, {
  //     warning: true
  //   });
  }
  return state;
};
