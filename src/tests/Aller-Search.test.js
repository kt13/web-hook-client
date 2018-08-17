/* global $ expect jest */

import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import {AllergyForm} from '../components/aller-search-form';
import {SearchResults} from '../components/search-results';
import {fetchFoods, toggleFoodsList} from '../actions/foods';


describe('<AllergyForm/>', () => {
  it('dispatches a get request', () => {
    //get input
    const str = 'masala';
    const dispatch = jest.fn();
    // const store = jest.fn();
    const wrapper = mount(shallow(<AllergyForm dispatch={dispatch}/>).get(0));
    const input = wrapper.find('#foodSearch');
    input.instance().value = str;

    //simulate onClick

    const button = wrapper.find('#getButton');
    button.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(fetchFoods(str));

    // console.log(wrapper.debug());
  });
});
