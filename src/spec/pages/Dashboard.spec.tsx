import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Dashboard from '@pages/Dashboard';
import Alignment from '@components/Alignment';
import Button from '@components/Button';
import Graph from '@components/Graph';
import PieChart from '@components/PieChart';
import Section from '@components/Section';
import Tile from '@components/Tile';
import Timeline from '@components/Timeline';
import Timer from '@components/Timer';
import Timesheet from '@components/Timesheet';

describe('Dashboard', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('render', () => {
    const wrapper = mount(<Dashboard />);
    const dashboard = wrapper.find(Dashboard);

    const testRenderer = renderer.create(<Dashboard />);

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });

    it('should contain two Alignment components', () => {
      const children = dashboard.find(Alignment);
      expect(children.length).toEqual(2);
    });

    it('should contain one Graph component', () => {
      const children = dashboard.find(Graph);
      expect(children.length).toEqual(1);
    });

    it('should contain one PieChart component', () => {
      const children = dashboard.find(PieChart);
      expect(children.length).toEqual(1);
    });

    it('should contain one Section component', () => {
      const children = dashboard.find(Section);
      expect(children.length).toEqual(1);
    });

    it('should contain three Tile components', () => {
      const children = dashboard.find(Tile);
      expect(children.length).toEqual(3);
    });

    it('should contain one Timeline component', () => {
      const children = dashboard.find(Timeline);
      expect(children.length).toEqual(1);
    });

    it('should contain one Timer component', () => {
      const children = dashboard.find(Timer);
      expect(children.length).toEqual(1);
    });

    it('should contain one Timesheet component', () => {
      const children = dashboard.find(Timesheet);
      expect(children.length).toEqual(1);
    });
  });

  describe('timesheet input', () => {
    it('should be set to empty string when stop button is clicked', () => {
      const wrapper = mount(<Dashboard />);
      wrapper.find('input').props().value = 'hello';

      act(() => wrapper.find(Button).at(1).props().handleClick());
      wrapper.update();

      // todo: add expect here once ref undefined issue is solved
    });

    it('should call console.log when the inputs onBlur is invoked', () => {
      const wrapper = mount(<Dashboard />);
      console.log = jest.fn();
      act(() => wrapper.find('input').prop('onBlur')!({} as never));

      expect(console.log).toHaveBeenCalledWith('string');
    });
  });

});
