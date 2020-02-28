import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Timer from '@components/Timer';
import Button from '@components/Button';

describe('Timer', () => {
  const wrapper = mount(<Timer />);
  const timer = wrapper.find(Timer);

  describe('render', () => {
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
      expect(startButton.prop('kind')).toBe('start');
    });

    it('should have a button of kind stop as its second child', () => {
      const stopButton = timer.find(Button).at(1);
      expect(stopButton.prop('kind')).toBe('stop');
    });
  });
});
