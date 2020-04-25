import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { DashboardContext } from '@pages/Dashboard';
import Timer from '@components/Timer';
import Button from '@components/Button';

describe('Timer', () => {

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllTimers();
  });

  describe('render', () => {
    const wrapper = mount(<Timer />);
    const timer = wrapper.find(Timer);

    const testRenderer = renderer.create(<Timer />);

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });

    it('should contain two Button components', () => {
      const children = timer.find(Button);
      expect(children.length).toEqual(2);
    });

    it('should have a button of kind start as its first child', () => {
      const startButton = timer.find(Button).at(0);
      expect(startButton.props()).toEqual({
        handleClick: expect.any(Function),
        kind: 'start',
      });
    });

    it('should have a button of kind stop as its second child', () => {
      const stopButton = timer.find(Button).at(1);
      expect(stopButton.props()).toEqual({
        handleClick: expect.any(Function),
        kind: 'stop',
      });
    });
  });

  describe('span / getStringFromTimeUnits', () => {
    it('should initially display 00:00:00', () => {
      const wrapper = mount(<Timer />);
      expect(wrapper.find('span').text()).toBe(`00:00:00`);
    });

    it('should display 00:00:01 after 1 second', () => {
      const wrapper = mount(<Timer />);
      jest.useFakeTimers();
      act(() => wrapper.find(Button).at(0).props().handleClick());
      wrapper.update();
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      wrapper.update();

      expect(wrapper.find('span').text()).toBe(`00:00:01`);
    });

    it('should display 00:01:00 after 60 seconds', () => {
      const wrapper = mount(<Timer />);
      jest.useFakeTimers();
      act(() => wrapper.find(Button).at(0).props().handleClick());
      wrapper.update();
      act(() => {
        jest.advanceTimersByTime(60000);
      });
      wrapper.update();
      expect(wrapper.find('span').text()).toBe(`00:01:00`);
    });

    it('should display 01:00:00 after 3600 seconds', () => {
      const wrapper = mount(<Timer />);
      jest.useFakeTimers();
      act(() => wrapper.find(Button).at(0).props().handleClick());
      wrapper.update();
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < 60; index++) {
        act(() => {
          jest.advanceTimersByTime(60000);
        });
        wrapper.update();
      }
      expect(wrapper.find('span').text()).toBe(`01:00:00`);
    });
  });

  describe('play / pause', () => {
    it('should show the pause button after the start button is clicked', () => {
      const wrapper = mount(<Timer />);
      act(() => wrapper.find(Button).at(0).props().handleClick());
      wrapper.update();

      expect(wrapper.find(Button).at(0).prop('kind')).toBe('pause');
    });


    it('should show the start button after the pause button is clicked', () => {
      const wrapper = mount(<Timer />);
      act(() => wrapper.find(Button).at(0).props().handleClick());
      wrapper.update();
      act(() => wrapper.find(Button).at(0).props().handleClick());
      wrapper.update();

      expect(wrapper.find(Button).at(0).prop('kind')).toBe('start');
    });
  });

  describe('stop', () => {
    it('should stop the timer and clear the interval when the stop button is clicked', () => {
      const dispatch = jest.fn();
      const store = [{
        label: '',
        seconds: 0,
      }];
      const totalSeconds = 0;
      jest.useFakeTimers();
      const wrapper = mount(
        <DashboardContext.Provider value={{ dispatch, store, totalSeconds }}>
          <Timer />
        </DashboardContext.Provider>
      );
      act(() => wrapper.find(Button).at(0).props().handleClick());
      wrapper.update();
      act(() => {
        jest.advanceTimersByTime(5000);
      });
      wrapper.update();
      act(() => wrapper.find(Button).at(1).props().handleClick());
      wrapper.update();
      expect(wrapper.find('span').text()).toBe(`00:00:00`);
    });
  });
});
