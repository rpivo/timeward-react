import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import AWS from 'aws-sdk/global';
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import Alignment from '@components/Alignment';
import Form from '@components/Form';
import Input from '@components/Input';
import Spinner from '@components/Spinner';
import config from '@env';

type LoginProps = {
  setIsAuthorized: (arg: boolean) => void;
};

const Login: React.FC<LoginProps> = ({ setIsAuthorized }: LoginProps): JSX.Element => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [didAuthFail, setDidAuthFail] = useState(false);

  const {
    clientID,
    identityPoolID,
    region,
    userPoolID,
  } = config[process.env.NODE_ENV!].cognito;

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

    cognitoUser.authenticateUser(authenticationDetails, {
      onFailure: err => {
        setIsLoading(false);
        setDidAuthFail(true);
        console.error('handleAuthFlow / cognitoUser.authenticateUser / onFailure with err', err);
      },
      onSuccess: result => {
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
          if (error) return console.error(error);
          setIsAuthorized(true);
          return history.push('/dashboard');
        });
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
