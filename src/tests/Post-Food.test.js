import React from 'react';
import PostFood from '../components/post-food';
import {shallow} from 'enzyme';

describe('<Dashboard/>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PostFood />);
    console.log(wrapper.debug());
  });
});
