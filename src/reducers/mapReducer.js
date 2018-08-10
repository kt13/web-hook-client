import {NEW_REQUEST, NEW_SUCCESS, NEW_ERROR, MARKER_INFO, NEW_ZIP_SEARCH} from '../actions/maps';

const initialState = {
  places: [],
  loading: false,
  error: null,
  markers: []
};

export const mapReducer = (state=initialState, action) => {
  if(action.type === NEW_REQUEST){
    return Object.assign({}, state, {loading: true});
  }
  else if(action.type === NEW_SUCCESS){
    return Object.assign({}, state, 
      {loading: false, error: null, listHide: false,
        foods: [...state.foods, ...action.data]
      });
  }
  else if(action.type === NEW_ERROR){
    return Object.assign({}, state, 
      {loading: false, error: action.error});
  }
  else if(action.type === MARKER_INFO){
    console.log(action, '------------');
    return Object.assign({}, state, 
      state.markers.map(item => {
        if(item.photo_id===action.marker.photo_id){
          return Object.assign({}, item, {isMarkOpen: action.toggle});
        }
        else{
          return item;
        }
      })
    );
  }
  else if(action.type === NEW_ZIP_SEARCH){
    console.log(action.newMarks);
    return Object.assign({}, state, 
      {markers: [
        ...state.markers, ...action.newMarks
      ]});
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

