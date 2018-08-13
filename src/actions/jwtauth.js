import {API_BASE_URL} from '../config';
import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const AUTH_SET = 'AUTH_SET';
export const setAuthToken = auth => ({
  type: AUTH_SET,
  auth
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type:AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = data => ({
  type: AUTH_SUCCESS,
  data
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error
});

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const createUser = (email, username, password) => dispatch => {
  dispatch(authRequest());
  console.log('I\'m making a post request to the back-end to create a user');
  return fetch(`${API_BASE_URL}/api/users`, {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify({

      email,
      username,
      password,
    })
  })
    .then(res => {
      console.log(res, 'test create user');
      return res.json();
    })
    .catch(err => {
      dispatch(authError(err));
    });
};

export const loginUser = (username, password) => dispatch => {
  dispatch(authRequest());
  console.log('I\'m making a get request to the back-end');
  return fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
    })
  })
    .then(res => res.json())
    .then(({token}) => {
      console.log(token);
      storeAuthInfo(token, dispatch);
    })
    .catch(err => {
      dispatch(authError(err));
    });
};