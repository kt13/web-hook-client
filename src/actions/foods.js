import {API_BASE_URL} from '../config';
export const NEW_REQUEST = 'NEW_REQUEST';
export const fetchFoodsRequest = () => ({
  type: NEW_REQUEST
});

export const NEW_SUCCESS = 'NEW_SUCCESS';
export const fetchFoodsSuccess = data => ({
  type: NEW_SUCCESS,
  data
});

export const NEW_ERROR = 'NEW_ERROR';
export const fetchFoodsError = error => ({
  type: NEW_ERROR,
  error
});

export const NEW_FOOD_SEARCH = 'NEW_FOOD_SEARCH';
export const toggleFoodsList = listHide => ({
  type: NEW_FOOD_SEARCH,
  listHide
});

export const fetchFoods = food => dispatch => {
  dispatch(fetchFoodsRequest());
  console.log('I\'m making a get request to the back-end');
  console.log(API_BASE_URL);
  return fetch(`${API_BASE_URL}/api/foods?searchTerm=${food}`)
    .then(res => {
      console.log(res, 'test console');
      return res.json();
    }).then(res => {
      console.log(res);
      dispatch(fetchFoodsSuccess(res));
      
    })
    .catch(err => {
      dispatch(fetchFoodsError(err));
    });
};