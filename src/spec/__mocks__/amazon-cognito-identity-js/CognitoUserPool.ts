export class CognitoUserPool {
  public userPoolId = '';
  public clientId = '';
  public getCurrentUser = jest.fn().mockReturnValue('cognitouserpool');

  constructor(data: Partial<CognitoUserPool>) {
    Object.assign(this, data);
  }
}
