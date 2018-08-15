import React from 'react';
import NavBar from '../components/nav-bar';
import {shallow} from 'enzyme';

describe('<Dashboard/>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NavBar/>);
    console.log(wrapper.debug());
  });
});
