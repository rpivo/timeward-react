export default class CognitoIdentityCredentials {
  public IdentityPoolId = '';
  public Logins = {};
  public refresh = jest.fn().mockImplementation((callback) => {
    callback();
  });

  constructor(data: Partial<CognitoIdentityCredentials>) {
    Object.assign(this, data);
  }
}
