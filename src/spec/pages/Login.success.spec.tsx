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

jest.mock('aws-sdk/global');

const mockGetIdToken = (): {} => {
  return {
    getJwtToken: jest.fn(),
  };
};

const result = {
  getIdToken: mockGetIdToken,
};

const data = {
  Session: null,
  authenticateUser: jest.fn().mockImplementation((authenticationDetails, callback) => {
    callback.onSuccess(result);
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
    const wrapper = mount(
      <MemoryRouter>
        <Login setIsAuthorized={jest.fn()} />
      </MemoryRouter>
    );
    act(() => wrapper.find(Form).props().onSubmit());
    wrapper.update();
    const children = wrapper.find(Spinner);
    expect(children.length).toEqual(1);
  });
});
