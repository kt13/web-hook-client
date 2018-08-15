import React from 'react';
import  PharmaSearch from '../components/pharma-search-form';
import {shallow} from 'enzyme';

describe('<Dashboard/>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PharmaSearch />);
    console.log(wrapper.debug());
  });
});
