import React from 'react';
import { shallow } from 'enzyme';
import { ProductInBasket, ProductInBasketComponent } from './ProductInBasket';

describe('Component ProductInBasket', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductInBasketComponent />);
    expect(component).toBeTruthy();
  });
});
