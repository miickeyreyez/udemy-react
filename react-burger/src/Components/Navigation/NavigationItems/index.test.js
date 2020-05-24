import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from '.';
import NavigationItem from './NavigationItem';

configure({
  adapter: new Adapter(),
});

describe('Navigation Items tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should render with two elements if no authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render with two elements if authenticated', () => {
    wrapper.setProps({
      isAuthenticated: true,
    });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
});
