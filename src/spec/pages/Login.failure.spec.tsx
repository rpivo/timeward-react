import React from 'react';
import { MemoryRouter } from 'react-router';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import CognitoUser from '../__mocks__/amazon-cognito-identity-js/CognitoUser';
import CognitoUserPool from '../__mocks__/amazon-cognito-identity-js/CognitoUserPool';
import AuthenticationDetails from '../__mocks__/amazon-cognito-identity-js/AuthenticationDetails';
import Login from '@pages/Login';
import Form from '@components/Form';

const data = {
  Session: null,
  authenticateUser: jest.fn().mockImplementation((authenticationDetails, callback) => {
    callback.onFailure({});
  }),
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

describe('Login failure', () => {
  it('should display an error message when auth fails', () => {
    const event = {} as React.FormEvent<HTMLInputElement>;
    const wrapper = mount(
      <MemoryRouter>
        <Login
          isAuthorized={false}
          isLogoutEnabled={false}
          setIsAuthorized={jest.fn()}
          setIsLogoutEnabled={jest.fn()}
        />
      </MemoryRouter>
    );
    act(() => wrapper.find(Form).props().onSubmit(event));
    wrapper.update();
    const children = wrapper.find('p');
    expect(children.length).toEqual(1);
  });
});
