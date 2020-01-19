import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Timer } from '@components/Timer';
import { Button } from '@components/Button';

describe('Timer', () => {
  const wrapper = shallow<Timer>(<Timer />);

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
    expect(wrapper.state('time')).toBe(0);
  });

  describe('methods', () => {
    const instance = wrapper.instance();

    it('should call startTimer', () => {
      instance['startTimer']();

      expect(wrapper.state('buttonType')).toBe('pause');
      expect(wrapper.state('time')).toBe(0);
    });

    it('should call pauseTimer', () => {
      instance['pauseTimer']();

      expect(wrapper.state('buttonType')).toBe('start');
    });

    it('should call stopTimer', () => {
      instance['stopTimer']();

      expect(wrapper.state('buttonType')).toBe('start');
      expect(wrapper.state('time')).toBe(0);
    });
  });
});
