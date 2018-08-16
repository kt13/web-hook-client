import {API_BASE_URL} from '../config';
import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const AUTH_SET = 'AUTH_SET';
export const setAuthToken = token => ({
  type: AUTH_SET,
  token
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type:AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = user => ({
  type: AUTH_SUCCESS,
  user
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error
});

// export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// export const registerSuccess = status => ({
//   type: REGISTER_SUCCESS,
//   status
// });


const storeAuthInfo = (authToken, dispatch) => {
  // console.log(authToken);
  const decodedToken = jwtDecode(authToken);
  // console.log(decodedToken, decodedToken.user.username);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user.username));
  saveAuthToken(authToken);
};

export const createUser = (email, username, password, history) => dispatch => {
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
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      /* dispatch(registerSuccess(true)); */
      history.push('/login');
      return res.json();
      // return res.json();
    })
    .catch(err => {
      dispatch(authError(err));
    });
};

export const loginUser = (username, password, history) => dispatch => {
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
    .then(res => {
      if(!res.ok){
        return Promise.reject({messsage: 'Unsuccessful Login'});
      }
      // console.log(res, 'test login user');
      return res.json();
    }).then(data => {
      // console.log(data);
      const {authToken} = data;
      // console.log(authToken);
      storeAuthInfo(authToken, dispatch);
      history.push('/');
    })
    .catch(err => {
      dispatch(authError(err));
    });
};

export const logoutUser = () => dispatch => {
  dispatch(clearAuth());
  clearAuthToken();
};