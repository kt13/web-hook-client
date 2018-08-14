import {API_BASE_URL} from '../config';
import {loadAuthToken} from '../local-storage';

export const NEW_REQUEST = 'NEW_REQUEST';
export const fetchFoodsRequest = () => ({
  type: NEW_REQUEST
});

export const NEW_SUCCESS = 'NEW_SUCCESS';
export const fetchFoodsSuccess = foods => ({
  type: NEW_SUCCESS,
  foods
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

export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const postFoodsSuccess = (name, ingredient) => ({
  type: NEW_POST_SUCCESS,
  name,
  ingredient
});


export const fetchFoods = food => dispatch => {
  dispatch(fetchFoodsRequest());
  console.log('I\'m making a get request to the back-end');
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

export const postNewFood = (nme1, ing2) => dispatch => {
  dispatch(fetchFoodsRequest());
  console.log('I\'m making a post request to the back-end');
  console.log(JSON.stringify({
    'name': nme1,
    'ingredients': ing2,
  }), nme1, ing2);
  return fetch(`${API_BASE_URL}/api/foods`,
    {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'Authorization': `Bearer ${loadAuthToken()}`
      },
      body: JSON.stringify({
        'name': nme1,
        'ingredients': ing2,
      })
    // })
    // .then(res => {
    //   console.log(res, 'test console posting');
    //   return res.json();
    }).then(res => {
    console.log(res);
    dispatch(postFoodsSuccess(res));
  })
    .catch(err => {
      dispatch(fetchFoodsError(err));
    });
};