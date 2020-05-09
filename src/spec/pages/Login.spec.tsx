import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import Login from '@pages/Login';

describe('Login', () => {
  describe('render', () => {
    const testRenderer = renderer.create(
      <MemoryRouter>
        <Login
          isAuthorized={false}
          isLogoutEnabled={false}
          setIsAuthorized={jest.fn()}
          setIsLogoutEnabled={jest.fn()}
        />
      </MemoryRouter>
    );

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });
  });
});
