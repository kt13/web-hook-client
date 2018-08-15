import React from 'react';
import AllergyForm from '../components/aller-search-form';
import {shallow} from 'enzyme';

describe('<Dashboard/>', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AllergyForm />);
    console.log(wrapper.debug());
  });
});
