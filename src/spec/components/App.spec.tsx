import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import CognitoUser from '../__mocks__/amazon-cognito-identity-js/CognitoUser';
import CognitoUserPool from '../__mocks__/amazon-cognito-identity-js/CognitoUserPool';
import AuthenticationDetails from '../__mocks__/amazon-cognito-identity-js/AuthenticationDetails';
import CognitoIdentityCredentials from '../__mocks__/AWS/CognitoIdentityCredentials';
import Alert from '@components/Alert';
import App from '@components/App';
import Form from '@components/Form';

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
jest.mock('aws-sdk/global', () => {
  return {
    CognitoIdentityCredentials: jest.fn().mockImplementation(() =>
      new CognitoIdentityCredentials({})),
    config: {
      credentials: jest.fn().mockImplementation(() =>
        new CognitoIdentityCredentials({})),
      region: 'us-east-1',
    },
  };
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('App', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('logout', () => {
    it('should log out when the logout button is clicked', () => {
      const event = {} as React.FormEvent<HTMLInputElement>;
      const wrapper = mount(<App />);
      act(() => wrapper.find(Form).props().onSubmit(event));
      wrapper.update();
      wrapper.find('a').at(2).simulate('click');
      const children = wrapper.find(Alert);
      expect(children.length).toEqual(1);
    });
  });
});
