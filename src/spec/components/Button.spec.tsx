import React from 'react';
import renderer from 'react-test-renderer';
import Button from '@components/Button';

describe('Button', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const button = <Button kind='pause' handleClick={ (): null => null }/>;

  describe('render', () => {
    const testRenderer = renderer.create(button);

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });

  });
});
