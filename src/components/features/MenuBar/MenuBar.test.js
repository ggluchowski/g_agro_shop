import React from 'react';
import { shallow } from 'enzyme';
import { MenuBar, MenuBarComponent } from './MenuBar';

describe('Component MenuBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<MenuBarComponent />);
    expect(component).toBeTruthy();
  });
});
