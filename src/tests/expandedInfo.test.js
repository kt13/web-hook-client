import React from 'react';
import ExpandedInfo from '../components/expandedInfo';
import {shallow} from 'enzyme';

describe('<Dashboard/>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<ExpandedInfo />);
    console.log(wrapper.debug());
  });
});
