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

export const EXPAND_RESULT = 'EXPAND_RESULT';
export const expandResult = torf => ({
  type: EXPAND_RESULT,
  torf
});

export const NEW_ALLERGEN_SUCCESS = 'NEW_ALLERGEN_SUCCESS';
export const fetchAllergenSuccess = allergy => ({
  type: NEW_ALLERGEN_SUCCESS,
  allergy
});

export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const postCommentSuccess = content => ({
  type: POST_COMMENT_SUCCESS,
  content
});

export const NEW_SEARCH_TERM = 'NEW_SEARCH_TERM';
export const newSearchTerm = search => ({
  type: NEW_SEARCH_TERM,
  search
});

export const fetchFoods = food => dispatch => {
  dispatch(fetchFoodsRequest());
  dispatch(newSearchTerm(food));
  console.log('I\'m making a get request to the back-end');
  return fetch(`${API_BASE_URL}/api/foods?searchTerm=${food}`)
    .then(res => {
      console.log(res, 'test console');
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(res => {
      console.log(res);
      dispatch(fetchFoodsSuccess(res));
      
    })
    .catch(err => {
      dispatch(fetchFoodsError(err));
    });
};

export const fetchAllergens = foodId => dispatch => {
  dispatch(fetchFoodsRequest());
  console.log('I\'m making a get request to the back-end to find allergens of that food');
  return fetch(`${API_BASE_URL}/api/foods/${foodId}/allergens`)
    .then(res => {
      console.log(res, 'test console');
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(res => {
      console.log(res);
      dispatch(fetchAllergenSuccess(res));
      
    })
    .catch(err => {
      dispatch(fetchFoodsError(err));
    });
};

export const postComment = (content, foodId) => (dispatch/* getState */) => {
  dispatch(fetchFoodsRequest());
  /* const searchWord = getState().foodsR.searchTerm; */
  console.log('I\'m making a post comment request to the back-end');
  console.log(JSON.stringify({
    'comments': content,
  }));
  return fetch(`${API_BASE_URL}/api/foods/${foodId}/comments`,
    {
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        comments: content,
        /* searchTerm: searchWord */
      })
    // })
    // .then(res => {
    //   console.log(res, 'test console posting');
    //   return res.json();
    }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    console.log(res);
    return res.json();
  })/* .then( res => {
    dispatch(fetchFoodsSuccess(res));
  }) */
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