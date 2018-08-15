import React from 'react';
import Login from '../components/login';
import {shallow} from 'enzyme';

describe('<Dashboard/>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Login />);
    console.log(wrapper.debug());
  });
});
