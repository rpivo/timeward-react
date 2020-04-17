import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import Login from '@pages/Login';
import Form from '@components/Form';
import Input from '@components/Input';
import Spinner from '@components/Spinner';

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

  describe('handleAuthFlow', () => {
    it('should display the spinner component after the submit button is clicked', () => {
      const wrapper = mount(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );
      act(() => wrapper.find(Form).props().onSubmit());
      wrapper.update();
      const children = wrapper.find(Spinner);
      expect(children.length).toEqual(1);
    });
  });
});
