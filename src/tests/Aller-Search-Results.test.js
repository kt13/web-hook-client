import React from 'react';
import SearchResults from '../components/search-results';
import {shallow} from 'enzyme';

describe('<Dashboard/>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SearchResults />);
    console.log(wrapper.debug());
  });
});
