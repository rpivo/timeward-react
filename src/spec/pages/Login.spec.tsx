import React from 'react';
import renderer from 'react-test-renderer';
import { Login } from '@pages/Login';

describe('Login', () => {
  describe('render', () => {
    const testRenderer = renderer.create(<Login />);

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });
  });
});
