import {NEW_ZIP_SEARCH} from '../actions/maps';

const initialState = {
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {}
};

export const zipReducer = (state=initialState, action) => {
  if(action.type === NEW_ZIP_SEARCH){
    return Object.assign({}, state, {listHide: action.listHide});
  }
  return state;
};
