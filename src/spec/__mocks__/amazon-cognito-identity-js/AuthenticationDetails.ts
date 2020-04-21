export default class AuthenticationDetails {
  public validationData = {};
  public authParameters = {};
  public clientMetadata = {};
  public username = '';
  public password = '';
  public getUsername = jest.fn().mockReturnValue('username');
  public getPassword = jest.fn().mockReturnValue('password');
  public getValidationData = jest.fn().mockReturnValue({});
  public getAuthParameters = jest.fn().mockReturnValue({});
  public getClientMetadata = jest.fn().mockReturnValue({});

  constructor(data: Partial<AuthenticationDetails>) {
    Object.assign(this, data);
  }
}
