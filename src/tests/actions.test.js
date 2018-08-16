import { 
  NEW_REQUEST, 
  NEW_SUCCESS, 
  NEW_ERROR, 
  EXPAND_RESULT, 
  NEW_FOOD_SEARCH,
  fetchFoodsRequest,
  fetchFoodsSuccess,
  fetchFoodsError,
  toggleFoodsList,
  postFoodsSuccess,
  expandResult,} from '../actions/foods';

import {
  AUTH_SET,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  setAuthToken,
  clearAuth,
  authRequest,
  authSuccess,
  authError,
  registerSuccess,
  // AUTH_WARNING
} from '../actions/jwtauth';

import {
  NEW_MAP_REQUEST, 
  NEW_MAP_SUCCESS, 
  NEW_MAP_ERROR, 
  MARKER_INFO, 
  NEW_ZIP_SEARCH, 
  CENTER_REALIGN,
  fetchMapRequest,
  fetchMapSuccess,
  fetchMapError,
  filterByZip,
  toggleMarkerInfo,
  mapRealign,} from '../actions/maps';

describe('fetch foods', () => {
  it('should fetch a filtered list of the foods', () => {
    const str = 'panini';
    const action = fetchFoodsSuccess(str);
    expect(action.type).toEqual(NEW_SUCCESS);
    expect(action.foods).toEqual(str);
  });
});
 
