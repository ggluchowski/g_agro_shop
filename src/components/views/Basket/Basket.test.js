import React from 'react';
import { shallow } from 'enzyme';
import { Basket, BasketComponent } from './Basket';

describe('Component Basket', () => {
  it('should render without crashing', () => {
    const component = shallow(<BasketComponent />);
    expect(component).toBeTruthy();
  });
});
