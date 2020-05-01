import React from 'react';
import renderer from 'react-test-renderer';
import Input from '@components/Input';

describe('Input', () => {

  describe('render', () => {
    const testRenderer = renderer.create(<Input />);

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });

  });
});
