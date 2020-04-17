import { AuthenticationDetails } from './AuthenticationDetails';
import { CognitoUser } from './CognitoUser';
import { CognitoUserPool } from './CognitoUserPool';

module.exports = {
  AuthenticationDetails: jest.fn().mockImplementation(() => new AuthenticationDetails({})),
  CognitoUser: jest.fn().mockImplementation(() => new CognitoUser({})),
  CognitoUserPool: jest.fn().mockImplementation(() => new CognitoUserPool({})),
};

