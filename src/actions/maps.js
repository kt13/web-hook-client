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



export const fetchingPlaces = places => dispatch => {
  dispatch(fetchMapRequest());
  console.log(places.lat, places.lng);
  console.log('I\'m making a get request to the back-end');
  // return fetch(
  //   `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${places.lat},${places.lng}&radius=5000&keyword=pharmacies&key=${API_KEY}`,
  //   {
  //     mode: 'no-cors',
  //     method: 'GET' 
  //   })
  return fetch(`${API_BASE_URL}/api/markers/${places.lat}/${places.lng}/${API_KEY}`)
    .then(res => {
      // console.log(res, 'test console');
      return res.json();
    }).then(res => {
      console.log(res.results);
      const markerData = res.results;
      console.log(...markerData);
      console.log(markerData[0].geometry.location.lat, markerData[0].id);
      // let newMarkerData=[];
      // markerData.map(item => {
      //   if(item.geometry && item.id && item.name){
      //     newMarkerData = [item.id, item.geometry, item.name];
      //     console.log(newMarkerData);
      //     return newMarkerData;
      //   }

      // });
      // // const {results} = res;
      // console.log(res.results);
     
      // for(const results in res){
      //   console.log(results);
      //   dispatch(fetchMapSuccess(results));
      // }
      dispatch(fetchMapSuccess(markerData));
    })
    .catch(err => {
      console.log(err,'error');
      dispatch(fetchMapError(err));
    });
};
// https://developers.google.com/places/web-service/search
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=YOUR_API_KEY&location=latitude,longitude&radius=5000&keyword=pharmacies
// const url = [
//   // Length issue
//   'https://gist.githubusercontent.com',
//   '/farrrr/dfda7dd7fccfec5474d3',
//   '/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json'
// ].join('');






// export const fetchingPlaces1 = () => dispatch => {
//   dispatch(fetchMapRequest());
//   console.log('I\'m making a request to the json file');
//   return fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       // this.setState({ markers: data.photos });
//       dispatch(filterByZip(data.photos));
//     });
// };
