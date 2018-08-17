import React from 'react';
import  Register from '../components/register';
import {mount} from 'enzyme';

describe('<Register/>', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Register />);
    // console.log(wrapper.debug());
  });
});
