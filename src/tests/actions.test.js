/* global $ expect jest */
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
  expandResult,} from '../actions/hooks';

describe('fetch foods', () => {
  it('should fetch a filtered list of the foods', () => {
    const str = 'panini';
    const action = fetchFoodsSuccess(str);
    expect(action.type).toEqual(NEW_SUCCESS);
    expect(action.foods).toEqual(str);
  });
});
 
