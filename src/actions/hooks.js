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

export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const postHooksSuccess = website => ({
  type: NEW_POST_SUCCESS,
  website,
});

export const DETAILS_HOOK = 'DETAILS_HOOK';
export const fetchOneHook = details => ({
  type: DETAILS_HOOK,
  details
});

export const DETAILS_REQUEST = 'DETAILS_REQUEST';
export const detailsReq = () => ({
  type: DETAILS_REQUEST,
});

export const UPD_HOOK_SUCCESS = 'UPD_HOOK_SUCCESS';
export const updateSuccess = web => ({
  type: UPD_HOOK_SUCCESS,
  web
});

export const DETAILS_CLEAR = 'DETAILS_CLEAR';
export const detailsClear = () => ({
  type: DETAILS_CLEAR,
});

export const UPDATE_CLEAR = 'UPDATE_CLEAR';
export const updateClear = () => ({
  type: UPDATE_CLEAR,
});

export const fetchAHook = id => dispatch => {
  dispatch(detailsReq());
  const url = 'http://localhost:8080/webhook/'+id;
  console.log(url);
  return fetch(url/* , */
  // {
  //   method: 'GET',
  //   headers:{
  //     'content-type': 'application/json',
  //   },
  /* } */)
  .then(res =>{
    if(res){
    return res.json();
    }
  })
  .then(res => {
    console.log(res);
    dispatch(fetchOneHook(res));
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

// export const getReqForUpdate = (id, web, first, last, key) => dispatch => {
//   return fetch('http://localhost:8080/webhook',
//     {
//       method: 'PUT',
//       headers:{
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         'details': {
//           'website': web, 
//           'first': first, 
//           'last': last, 
//           'key': key
//         }
//       })
//     // })
//     // .then(res => {
//     //   console.log(res, 'test console posting');
//     //   return res.json();
//     }).then(res => {
//     // console.log(res);
//     dispatch(postHooksSuccess(web));
//   })
//     .catch(err => {
//       console.log(err);
//       dispatch(fetchHooksError(err));
//     });
// };


export const updateHook = (obj, id) => dispatch => {
  const url = 'http://localhost:8080/webhook/'+id;
  return fetch(url,
    {
      method: 'PUT',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        'details': {
          obj
        }
      })
    // })
    // .then(res => {
    //   console.log(res, 'test console posting');
    //   return res.json();
    }).then(res => {
    // console.log(res);
    if(res){
    dispatch(updateSuccess(obj.website));
    }
  })
    .catch(err => {
      console.log(err);
      dispatch(fetchHooksError(err));
    });
};

export const postNewHook = (web, first, last, key) => dispatch => {
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
        'details': {
          'website': web, 
          'first': first, 
          'last': last, 
          'key': key
        }
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