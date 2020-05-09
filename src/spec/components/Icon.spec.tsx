import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '@components/Icon';

describe('Icon', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Icon />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
