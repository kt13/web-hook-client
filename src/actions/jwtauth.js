import {API_BASE_URL} from '../config';
export const NEW_JWT_REQUEST = 'NEW_JWT_REQUEST';
export const fetchCredRequest = () => ({
  type: NEW_JWT_REQUEST
});

export const NEW_JWT_SUCCESS = 'NEW_JWT_SUCCESS';
export const fetchCredSuccess = data => ({
  type: NEW_JWT_SUCCESS,
  data
});

export const NEW_JWT_ERROR = 'NEW_JWT_ERROR';
export const fetchCredError = error => ({
  type: NEW_JWT_ERROR,
  error
});

export const createUser = (user, pass) => dispatch => {
  dispatch(fetchCredRequest());
  console.log('I\'m making a get request to the back-end');
  return fetch(`${API_BASE_URL}/api/users`, {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      'name': user,
      'ingredients': pass,
    })
  })
    .then(res => {
      console.log(res, 'test create user');
      return res.json();
    }).then(res => {
      console.log(res);
      dispatch(fetchCredSuccess(res));
      
    })
    .catch(err => {
      dispatch(fetchCredError(err));
    });
};