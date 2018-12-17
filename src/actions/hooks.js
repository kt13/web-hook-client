import {API_BASE_URL} from '../config';
// import {loadAuthToken} from '../local-storage';

export const NEW_REQUEST = 'NEW_REQUEST';
export const fetchFoodsRequest = () => ({
  type: NEW_REQUEST
});

export const NEW_FETCH_SUCCESS = 'NEW_FETCH_SUCCESS';
export const fetchHooksSuccess = list => ({
  type: NEW_FETCH_SUCCESS,
  list
});

export const NEW_ERROR = 'NEW_ERROR';
export const fetchHooksError = error => ({
  type: NEW_ERROR,
  error
});

export const NEW_FOOD_SEARCH = 'NEW_FOOD_SEARCH';
export const toggleFoodsList = listHide => ({
  type: NEW_FOOD_SEARCH,
  listHide
});

export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const postHooksSuccess = website => ({
  type: NEW_POST_SUCCESS,
  website,
});

export const EXPAND_RESULT = 'EXPAND_RESULT';
export const expandResult = torf => ({
  type: EXPAND_RESULT,
  torf
});

export const NEW_SEARCH_TERM = 'NEW_SEARCH_TERM';
export const newSearchTerm = search => ({
  type: NEW_SEARCH_TERM,
  search
});

export const FETCH_FOODS_ZERO = 'FETCH_FOODS_ZERO';
export const fetchFoodsZero = () => ({
  type: FETCH_FOODS_ZERO,
});

export const DELETE_HOOK = 'DELETE_HOOK';
export const deleteHookLog = deleted => ({
  type: DELETE_HOOK,
  deleted
});

export const deleteHook = id => dispatch => {
  return fetch('http://localhost:8080/webhook',
  {
    method: 'DELETE',
    headers:{
      'content-type': 'application/json',
    },
  })
  .then(res =>{
    console.log(res);
    if(res.status=204){
      dispatch(deleteHook(res));
    }
  })
  .catch(err =>{
    dispatch(fetchHooksError(err));
  });
};

export const fetchHooks = () => dispatch => {
  // dispatch(fetchFoodsRequest());
  // dispatch(newSearchTerm(food));
  // console.log('I\'m making a get request to the back-end');
  return fetch('http://localhost:8080/webhook')
    .then(res => {
      // console.log(res, 'test console');
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(res => {
      console.log(res);
      if(res.length > 0){
        dispatch(fetchHooksSuccess(res));
      }
      else if(!res.length){
        dispatch(fetchFoodsZero());
      }
      
    })
    .catch(err => {
      dispatch(fetchHooksError(err));
    });
};

export const postNewHook = (web) => dispatch => {
  // dispatch(fetchFoodsRequest());
  // console.log('I\'m making a post request to the back-end');
  // console.log(JSON.stringify({
  //   'name': nme1,
  //   'ingredients': ing2,
  // }), nme1, ing2);
  return fetch('http://localhost:8080/webhook',
    {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        'website': web
      })
    // })
    // .then(res => {
    //   console.log(res, 'test console posting');
    //   return res.json();
    }).then(res => {
    // console.log(res);
    dispatch(postHooksSuccess(web));
  })
    .catch(err => {
      console.log(err);
      dispatch(fetchHooksError(err));
    });
};