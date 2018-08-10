import {findPlacesFromQuery} from 'google-maps-react';
// export const NEW_REQUEST = 'NEW_REQUEST';
// export const fetchFoodsRequest = () => ({
//   type: NEW_REQUEST
// });

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

export const NEW_ZIP_SEARCH = 'NEW_FOOD_SEARCH';
export const toggleFoodsList = listHide => ({
  type: NEW_ZIP_SEARCH,
  listHide
});

export const fetchPharmacy = zip => dispatch => {
  console.log('I\'m making a get request to the back-end');
  const request = {
    query: `pharmacy ${zip}`,
    fields: ['photos', 'formatted_address', 'name', 'opening_hours', 'geometry'],
  };
  console.log(request.query);
  function callback(results, status) {
    console.log(results, status);
    if (status === 'OK') {
      for (let i = 0; i < results.length; i++) {
        // let place = results[i];
        // createMarker(results[i]);
      }
    }
  }
  // dispatch(fetchFoodsRequest());
  
  findPlacesFromQuery(request, callback);

  // .then(res => {
  //   console.log(res, 'test console');
  //   return res.json();
  // }).then(res => {
  //   console.log(res);
  //   dispatch(fetchFoodsSuccess(res));
      
  // })
  // .catch(err => {
  //   dispatch(fetchFoodsError(err));
  // });
};