import React, { useState } from 'react';
import AWS from 'aws-sdk/global';
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import Alignment from '@components/Alignment';
import Form from '@components/Form';
import Input from '@components/Input';
import env from '@env';

const {
  clientID,
  identityPoolID,
  region,
  userPoolID,
} = env[process.env.NODE_ENV!].cognito;

const Login: React.FC = (): JSX.Element => {
  const [state, setState] = useState({ email: '', password: '' });

  const poolData = {
    ClientId: clientID,
    UserPoolId: userPoolID,
  };

  const login = (): void => {
    event!.preventDefault();
    const authenticationData = {
      Password: state.password,
      Username: state.email,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Pool: userPool,
      Username: state.email,
    };
    const cognitoUser = new CognitoUser(userData);
    let sessionUserAttributes: {};

    cognitoUser.authenticateUser(authenticationDetails, {
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        delete userAttributes.email_verified;
        sessionUserAttributes = userAttributes;
        const callback = {
          onFailure: (): void =>
            console.error('Login / login / newPasswordRequired / updating password failed', {
              requiredAttributes, userAttributes,
            }),
          onSuccess: (): void =>
            console.log('Login / login / newPasswordRequired / updating password successful', {
              requiredAttributes, userAttributes,
            }),
        };
        cognitoUser.completeNewPasswordChallenge(
          '$Penrosetriangle2',
          sessionUserAttributes,
          callback
        );
      },
      onFailure: err => {
        console.log('onFailure with err', err);
        console.error(err.message || JSON.stringify(err));
      },
      onSuccess: result => {
        const accessToken = result.getAccessToken().getJwtToken();
        console.log('onSuccess with result, accessToken', {
          accessToken, result,
        });
        AWS.config.region = region;

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: identityPoolID,
          Logins: {
            [`cognito-idp.${region}.amazonaws.com/${userPoolID}`]: result
              .getIdToken()
              .getJwtToken(),
          },
        });
        (AWS.config.credentials as AWS.CognitoIdentityCredentials).refresh((error) => {
          if (error) {
            console.error(error);
          } else {
            console.log('Successfully logged!');
          }
        });
      },
    });
  };

  const handleInputChange =
    (kind: string) => (event: React.ChangeEvent<HTMLInputElement>): void => {
      event.persist();
      setState(prevState => ({ ...prevState, [kind]: event.target.value }));
    };

  return (
    <Alignment vertical horizontal>
      <Form onSubmit={ login } >
        <Input onChange={ handleInputChange('email') } placeholder='Email Address' />
        <Input onChange={ handleInputChange('password') } placeholder='Password' password />
      </Form>
    </Alignment>
  );
};

export default Login;
