import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Timer from '@components/Timer';
import Button from '@components/Button';

describe('Timer', () => {

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

  describe('pause', () => {
    const wrapper = mount(<Timer />);
    const timer = wrapper.find(Timer);
    const startButton = timer.find(Button).at(0);

    it('should pause after the start button is clicked', () => {
      act(() => startButton.props().handleClick());
      wrapper.update();

      const updatedTimer = wrapper.find(Timer);
      expect(updatedTimer.find(Button).at(0).prop('kind')).toBe('pause');
    });
  });

});
