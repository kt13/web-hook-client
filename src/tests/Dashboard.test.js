import React from 'react';
import Dashboard from '../Dashboard';
import {shallow} from 'enzyme';

describe('<Dashboard/>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Dashboard />);
    // console.log(wrapper.debug());
  });
});
