import {API_KEY} from '../config';
import {API_BASE_URL} from '../config';

export const NEW_MAP_REQUEST = 'NEW_MAP_REQUEST';
export const fetchMapRequest = () => ({
  type: NEW_MAP_REQUEST
});

export const NEW_MAP_SUCCESS = 'NEW_MAP_SUCCESS';
export const fetchMapSuccess = data => ({
  type: NEW_MAP_SUCCESS,
  data
});

export const NEW_MAP_ERROR = 'NEW_MAP_ERROR';
export const fetchMapError = error => ({
  type: NEW_MAP_ERROR,
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

export const CENTER_REALIGN = 'CENTER_REALIGN ';
export const mapRealign = (lat, lng) => ({
  type: CENTER_REALIGN ,
  lat,
  lng
});

export const fetchingPlaces = (lat, lng) => dispatch => {
  dispatch(fetchMapRequest());
  // console.log(places.lat, places.lng);
  dispatch(mapRealign(lat, lng));
  // console.log('I\'m making a get request to the back-end');
  return fetch(`${API_BASE_URL}/api/markers/${lat}/${lng}/${API_KEY}`)
    .then(res => {
      // console.log(res, 'test console');
      return res.json();
    }).then(res => {
      // console.log(res.results);
      const markerData = res.results;
      // console.log(...markerData);
      // console.log(markerData[0].geometry.location.lat, markerData[0].id);
      dispatch(fetchMapSuccess(markerData));
    })
    .catch(err => {
      // console.log(err,'error');
      dispatch(fetchMapError(err));
    });
};
