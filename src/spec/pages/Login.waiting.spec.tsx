import React from 'react';
import { MemoryRouter } from 'react-router';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import CognitoUser from '../__mocks__/amazon-cognito-identity-js/CognitoUser';
import CognitoUserPool from '../__mocks__/amazon-cognito-identity-js/CognitoUserPool';
import AuthenticationDetails from '../__mocks__/amazon-cognito-identity-js/AuthenticationDetails';
import Login from '@pages/Login';
import Form from '@components/Form';
import Spinner from '@components/Spinner';

const data = {
  Session: null,
  authenticateUser: jest.fn(),
  authenticationFlowType: 'USER_SRP_AUTH',
  client: {},
  getSignInUserSession: jest.fn().mockReturnValue({}),
  keyPrefix: '',
  pool: {},
  setSignInUserSession: jest.fn(),
  signInUserSession: null,
  storage: {},
  userDataKey: '',
  username: '',
};
jest.mock('amazon-cognito-identity-js', () => {
  return {
    AuthenticationDetails: jest.fn().mockImplementation(
      () => new AuthenticationDetails({})
    ),
    CognitoUser: jest.fn().mockImplementation(() => new CognitoUser(data)),
    CognitoUserPool: jest.fn().mockImplementation(() => new CognitoUserPool({})),
  };
});

describe('Login waiting', () => {
  it('should display the spinner component after the submit button is clicked', () => {
    const event = {} as React.FormEvent<HTMLInputElement>;
    const wrapper = mount(
      <MemoryRouter>
        <Login isAuthorized={false} setIsAuthorized={jest.fn()} />
      </MemoryRouter>
    );
    act(() => wrapper.find(Form).props().onSubmit(event));
    wrapper.update();
    const children = wrapper.find(Spinner);
    expect(children.length).toEqual(1);
  });
});
