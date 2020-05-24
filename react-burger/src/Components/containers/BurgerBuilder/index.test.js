import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BurgerBuilder } from '.';
import BuildControls from '../../Burger/BuildControls';

configure({
  adapter: new Adapter(),
});

describe('Burger Builder tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onFetchIngredients={() => {}} />);
  });

  it('should render build controls if ingredients', () => {
    wrapper.setProps({
      ingredients: { Salad: 0 },
    });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
