import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Header from '@components/Header';

describe('Header', () => {

  const header =
    <MemoryRouter>
      <Header isAuthorized={true} />
    </MemoryRouter>;

  describe('render', () => {
    const testRenderer = renderer.create(header);

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });

  });
});
