import React from 'react';
import renderer from 'react-test-renderer';
import StyledAlignment from '@styles/components/Alignment.styled';

describe('Button', () => {

  const styledAlignment = <StyledAlignment />;

  describe('render', () => {
    const testRenderer = renderer.create(styledAlignment);

    it('should render correctly', () => {
      testRenderer.toJSON();
      expect(testRenderer).toMatchSnapshot();
    });

  });
});
