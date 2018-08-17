import React from 'react';
import Login from '../components/login';
import {mount} from 'enzyme';

describe('<Login/>', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Login />);
    // console.log(wrapper.debug());
  });
});
