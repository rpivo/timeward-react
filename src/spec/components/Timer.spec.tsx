import React from 'react';
import renderer from 'react-test-renderer';
import { Timer } from '../../components/Timer';

describe('Timer', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Timer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});