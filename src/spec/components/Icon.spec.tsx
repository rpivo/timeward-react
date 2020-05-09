import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '@components/Icon';

describe('Icon', () => {
  it('should render X icon', () => {
    const tree = renderer
      .create(<Icon type='x' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render checkmark icon', () => {
    const tree = renderer
      .create(<Icon type='checkmark' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
