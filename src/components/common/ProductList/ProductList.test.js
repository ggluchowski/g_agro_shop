import React from 'react';
import { shallow } from 'enzyme';
import { ProductList, ProductListComponent } from './ProductList';

describe('Component ProductList', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductListComponent />);
    expect(component).toBeTruthy();
  });
});
