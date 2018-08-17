import React from 'react';
import {PostFood} from '../components/post-food';
import {shallow} from 'enzyme';

describe('<PostFood/>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PostFood />);
    // console.log(wrapper.debug());
  });
});
