import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Dashboard from '@pages/Dashboard';
import Section from '@components/Section';

describe('Login', () => {

  describe('render', () => {
    const wrapper = mount(<Dashboard />);
    const dashboard = wrapper.find(Dashboard);

    const testRenderer = renderer.create(<Dashboard />);

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });

    it('should contain a Section component', () => {
      const children = dashboard.find(Section);
      expect(children.length).toEqual(1);
    });
  });

  describe('timesheet input', () => {
    const wrapper = mount(<Dashboard />);
    const dashboard = wrapper.find(Dashboard);
    const input = dashboard.find('input');

    it('should call console.log when the inputs onBlur is invoked', () => {
      console.log = jest.fn();

      input.simulate('blur');

      expect(console.log).toHaveBeenCalledWith('');
    });
  });

});
