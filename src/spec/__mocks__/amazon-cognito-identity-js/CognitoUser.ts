export class CognitoUser {
  public username = '';
  public pool = {};
  public Session = null;
  public client = {};
  public signInUserSession = null;
  public authenticationFlowType = 'USER_SRP_AUTH';
  public storage = {};
  public keyPrefix = '';
  public userDataKey = '';
  public setSignInUserSession = jest.fn();
  public getSignInUserSession = jest.fn().mockReturnValue({});
  public authenticateUser = jest.fn();

  constructor(data: Partial<CognitoUser>) {
    Object.assign(this, data);
  }
}
