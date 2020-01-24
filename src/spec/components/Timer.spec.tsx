import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Timer } from '@components/Timer';
import { Button } from '@components/Button';

describe('Timer', () => {
  interface TimerInstance extends React.Component<{}, {}> {
    seconds: number;
    minutes: number;
    hours: number;
  }

  const wrapper = mount<Timer>(<Timer />);
  const timer = wrapper.find(Timer);
  const TimerInstance = timer.instance() as TimerInstance;

  beforeEach(() => {
    wrapper.state().seconds = 0;
    TimerInstance.hours = 0;
    TimerInstance.minutes = 0;
    TimerInstance.seconds = 0;
  });

  describe('render', () => {
    const testRenderer = renderer.create(<Timer />);
    const testInstance = testRenderer.root;

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });

    it('should contain two Button components', () => {
      const children = testInstance.findAllByType(Button);
      expect(children.length).toEqual(2);
    });
  });

  describe('state', () => {
    expect(wrapper.state('buttonType')).toBe('start');
    expect(wrapper.state('seconds')).toBe(0);
  });

  describe('methods', () => {
    const instance = wrapper.instance();

    describe('constructStringFromSeconds', () => {
      it('should return a timestring', () => {
        expect(instance['constructStringFromSeconds']()).toBe('00:00:00');
      });

      it('should set this.seconds to 0 under certain conditions', () => {
        wrapper.state().seconds = 60;
        instance['constructStringFromSeconds']();
        expect(TimerInstance.seconds).toBe(0);
      });

      it('should set this.minutes to 0 under certain conditions', () => {
        wrapper.state().seconds = 60;
        TimerInstance.minutes = 59;
        instance['constructStringFromSeconds']();
        expect(TimerInstance.hours).toBe(1);
      });
    });

    it('should call startTimer', () => {
      instance['startTimer']();

      expect(wrapper.state('buttonType')).toBe('pause');
      expect(wrapper.state('seconds')).toBe(0);
    });

    it('should call pauseTimer', () => {
      instance['pauseTimer']();

      expect(wrapper.state('buttonType')).toBe('start');
    });

    it('should call stopTimer', () => {
      instance['stopTimer']();

      expect(wrapper.state('buttonType')).toBe('start');
      expect(wrapper.state('seconds')).toBe(0);
    });
  });
});
