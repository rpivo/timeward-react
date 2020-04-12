import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import Login from '@pages/Login';

describe('Login', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('render', () => {
    const testRenderer = renderer.create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });
  });
});
