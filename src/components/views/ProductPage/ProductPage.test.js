import React from 'react';
import { shallow } from 'enzyme';
import { ProductPage, ProductPageComponent } from './ProductPage';

describe('Component ProductPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductPageComponent />);
    expect(component).toBeTruthy();
  });
});
