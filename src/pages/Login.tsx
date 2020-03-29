import React, { useState } from 'react';
import AWS from 'aws-sdk/global';
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import Alignment from '@components/Alignment';
import Form from '@components/Form';

const Login: React.FC = (): JSX.Element => {
  const [state, setState] = useState({ email: '', password: '' });

  const poolData = {
    ClientId: '1ccobdlb42fqkep9t8rilvrrjp',
    UserPoolId: 'us-east-1_VstCEyxTZ',
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
        AWS.config.region = 'us-east-1';

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: 'us-east-1:8dec48e1-3192-46b7-b31a-868f2dd7df85',
          Logins: {
            'cognito-idp.us-east-1.amazonaws.com/us-east-1_VstCEyxTZ': result
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

  const handleChange = (kind: string) => (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setState(prevState => ({ ...prevState, [kind]: event.target.value }));
  };

  return (
    <Alignment vertical horizontal>
      <Form onSubmit={ login } >
        <Form.Input onChange={ handleChange('email') } placeholder='Email Address' />
        <Form.Input onChange={ handleChange('password') } placeholder='Password' password />
      </Form>
    </Alignment>
  );
};

export default Login;
