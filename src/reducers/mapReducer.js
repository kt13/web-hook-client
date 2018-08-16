import {
  NEW_MAP_REQUEST, 
  NEW_MAP_SUCCESS, 
  NEW_MAP_ERROR, 
  MARKER_INFO, 
  NEW_ZIP_SEARCH, 
  CENTER_REALIGN} from '../actions/maps';

const initialState = {
  markers: [],
  loading: false,
  error: null,
  centerLat: 39.648209,
  centerLng: -75.711185
};

export const mapReducer = (state=initialState, action) => {
  if(action.type === NEW_MAP_REQUEST){
    return Object.assign({}, state, {
      loading: true
    });

  } else if(action.type === NEW_MAP_SUCCESS){
    // console.log(action.data);
    return Object.assign({}, state, {
      loading: false,
      markers: [...action.data]
    });

  } else if(action.type === CENTER_REALIGN){
    return Object.assign({}, state, {
      loading: false,
      centerLat: action.lat, centerLng: action.lng
    });

  } else if(action.type === NEW_MAP_ERROR){
    return Object.assign({}, state, {
      loading: false, error: action.error
    });

  } else if(action.type === MARKER_INFO){
    // console.log(action, '------------');
    return Object.assign({}, state, 
      {
        markers: state.markers.map(item => {
          if(item.photo_id===action.marker.photo_id){
            // console.log(item);
            return Object.assign({}, item, {
              isMarkOpen: action.toggle
            });
          }
          else{
            return item;
          }
        })
      });

  } else if(action.type === NEW_ZIP_SEARCH){
    // console.log(action.newMarks);
    return Object.assign({}, state, {
      markers: [...state.markers, ...action.newMarks]
    });
  }
  return state;
};
// switch(action.type) {
//   case(MAKE_GUESS):
//     return Object.assign({}, state, {
//       guessList: [...state.guessList, action.guess],
//       feedback: generateFeedback(action.guess)
//     });
//   case(START_NEW_GAME):
//     return Object.assign({}, state, {
//       targetNumber: generateNewTarget(),
//       feedback: 'Make your Guess!',
//       guessList: [],
//       showInfo: false
//     });
//   case(TOGGLE_MODAL):
//     return Object.assign({}, state, {
//       showInfo: !state.showInfo
//     });
//   default:
//     return state;
//   }
// };

