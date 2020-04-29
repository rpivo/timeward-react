import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import PrivateRoute from '@components/PrivateRoute';
import Dashboard from '@pages/Dashboard';

describe('PrivateRoute', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <PrivateRoute isAuthorized={true} component={Dashboard} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
