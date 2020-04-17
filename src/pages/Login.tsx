import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import AWS from 'aws-sdk/global';
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import Alignment from '@components/Alignment';
import Form from '@components/Form';
import Input from '@components/Input';
import Spinner from '@components/Spinner';
import env from '@env';

const {
  clientID,
  identityPoolID,
  region,
  userPoolID,
} = env[process.env.NODE_ENV!].cognito;

const Login: React.FC = (): JSX.Element => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [didAuthFail, setDidAuthFail] = useState(false);

  const poolData = {
    ClientId: clientID,
    UserPoolId: userPoolID,
  };

  const history = useHistory();

  const handleAuthFlow = (): void => {
    setIsLoading(true);

    const authenticationData = {
      Password: inputs.password,
      Username: inputs.email,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Pool: userPool,
      Username: inputs.email,
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
        setIsLoading(false);
        setDidAuthFail(true);

        console.log('onFailure with err', err);
        console.error(err.message || JSON.stringify(err));
      },
      onSuccess: result => {
        setIsLoading(true);

        AWS.config.region = region;

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: identityPoolID,
          Logins: {
            [`cognito-idp.${region}.amazonaws.com/${userPoolID}`]: result
              .getIdToken()
              .getJwtToken(),
          },
        });

        (AWS.config.credentials as AWS.CognitoIdentityCredentials).refresh((error) =>
          error ? console.error(error) : history.push('/dashboard'));
      },
    });
  };

  const handleInputChange =
    (kind: string) => (event: React.ChangeEvent<HTMLInputElement>): void => {
      event.persist();
      setInputs(prevState => ({ ...prevState, [kind]: event.target.value }));
    };

  return (
    <Alignment vertical horizontal>
      {isLoading ? <Spinner /> : (
        <>
          {didAuthFail &&
            <p style={{ color: 'red', fontSize: '1.14rem', textAlign: 'center' }}>
              Incorrect username or password.
            </p>
          }
          <Form onSubmit={handleAuthFlow}>
            <Input onChange={handleInputChange('email')} placeholder='Email Address' />
            <Input onChange={handleInputChange('password')} placeholder='Password' password />
          </Form>
        </>
      )}
    </Alignment>
  );
};

export default Login;
