import React from 'react';
import renderer from 'react-test-renderer';
import { Timer } from '@components/Timer';

describe('Timer', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Timer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('play', () => {
    it('should play when play button is clicked', () => { /* todo */ });

    it('should increment by 1 second every second while playing', () => { /* todo */ });
  });

  describe('pause', () => {
    it('should pause when pause button is clicked', () => { /* todo */ });

    it('should not increment time while paused', () => { /* todo */ });
  });

  describe('stop', () => {
    it('should stop when stop button is clicked', () => { /* todo */ });

    it('should reset the clock when stopped', () => { /* todo */ });
  });
});