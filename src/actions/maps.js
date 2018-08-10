import {API_KEY} from '../config';
export const NEW_REQUEST = 'NEW_REQUEST';
export const fetchMapRequest = () => ({
  type: NEW_REQUEST
});

export const NEW_SUCCESS = 'NEW_SUCCESS';
export const fetchMapSuccess = data => ({
  type: NEW_SUCCESS,
  data
});

export const NEW_ERROR = 'NEW_ERROR';
export const fetchMapError = error => ({
  type: NEW_ERROR,
  error
});

export const NEW_ZIP_SEARCH = 'NEW_ZIP_SEARCH';
export const filterByZip = newMarks => ({
  type: NEW_ZIP_SEARCH,
  newMarks
});

export const MARKER_INFO = 'MARKER_INFO';
export const toggleMarkerInfo = (toggle, marker) => ({
  type: MARKER_INFO,
  toggle,
  marker
});



// export const fetchingPlaces = places => dispatch => {
//   dispatch(fetchMapRequest());
//   console.log('I\'m making a get request to the back-end');
//   return fetch(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=geometry,drawing,places`)
//     .then(res => {
//       console.log(res, 'test console');
//       return res.json();
//     }).then(res => {
//       console.log(res);
//       dispatch(fetchMapSuccess(res));
      
//     })
//     .catch(err => {
//       dispatch(fetchMapError(err));
//     });
// };
// https://developers.google.com/places/web-service/search
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=YOUR_API_KEY&location=latitude,longitude&radius=5000&keyword=pharmacies
const url = [
  // Length issue
  'https://gist.githubusercontent.com',
  '/farrrr/dfda7dd7fccfec5474d3',
  '/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json'
].join('');

export const fetchingPlaces = () => dispatch => {
  dispatch(fetchMapRequest());
  console.log('I\'m making a request to the json file');
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      // this.setState({ markers: data.photos });
      dispatch(filterByZip(data.photos));
    });
};
