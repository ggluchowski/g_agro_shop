import React from 'react';
import { shallow } from 'enzyme';
import { ProductBox, ProductBoxComponent } from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBoxComponent />);
    expect(component).toBeTruthy();
  });
});
