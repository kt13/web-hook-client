import React from 'react';
import  PharmaSearch from '../components/pharma-search-form';
import {mount} from 'enzyme';

describe('<PharmaSearch/>', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<PharmaSearch />);
    // console.log(wrapper.debug());
  });
});
