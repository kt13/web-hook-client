import {
  AUTH_SET,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
  // AUTH_WARNING
} from '../actions/jwtauth';

const initialState = {
  warning: false,
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  registerError: null,
  loginError: null
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

  } else if (action.type === REGISTER_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      registerError: action.error
    });

  } else if (action.type === LOGIN_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      loginError: action.error
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
