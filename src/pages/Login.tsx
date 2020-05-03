import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import AWS from 'aws-sdk/global';
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import Alignment from '@components/Alignment';
import Form from '@components/Form';
import Icon from '@components/Icon';
import Input from '@components/Input';
import Spinner from '@components/Spinner';
import config from '@env';
import StyledLogin from '@styles/pages/Login.styled';

type LoginProps = {
  setIsAuthorized: (arg: boolean) => void;
};

const Login: React.FC<LoginProps> = ({ setIsAuthorized }: LoginProps): JSX.Element => {
  const [didAuthFail, setDidAuthFail] = useState(false);
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isNewPasswordFocused, setIsNewPasswordFocused] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [hasLowercaseCharacter, setHasLowercaseCharacter] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
  const [hasUppercaseCharacter, setHasUppercaseCharacter] = useState(false);
  const [is8CharactersLong, setIs8CharactersLong] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);

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
      onFailure: () => {
        setIsLoading(false);
        setDidAuthFail(true);
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

  const handleButtonClick = (flag: string): void =>
    flag === 'signup' ? setIsSignup(true) : setIsSignup(false);

  const handleFocus = (): void => setIsNewPasswordFocused(!isNewPasswordFocused);

  const validatePassword = (): void => {
    const refValue = passwordRef.current!.value;

    if ((refValue.toUpperCase() !== refValue) !== hasLowercaseCharacter) {
      setHasLowercaseCharacter(!hasLowercaseCharacter);
    }
    if (((/\d/).test(refValue)) !== hasNumber) {
      setHasNumber(!hasNumber);
    }
    if (((/[\s~`!@#$%^&*+=\-[\]\\';,/{}|\\":<>?()._]/g).test(refValue)) !== hasSpecialCharacter) {
      setHasSpecialCharacter(!hasSpecialCharacter);
    }
    if ((refValue.toLowerCase() !== refValue) !== hasUppercaseCharacter) {
      setHasUppercaseCharacter(!hasUppercaseCharacter);
    }
    if ((refValue.length >= 8) !== is8CharactersLong) {
      setIs8CharactersLong(!is8CharactersLong);
    }
  };

  return (
    <Alignment vertical horizontal>
      {isLoading ? <Spinner /> : (
        <StyledLogin>
          <h1>TIMEWARD</h1>
          <hr />
          <h2>DAY MANAGER & TIME TRACKER</h2>
          {isNewPasswordFocused && isSignup &&
            <div className='password-requirements'>
              <p><Icon type={is8CharactersLong ? 'checkmark' : 'x'} />
                Password must be at least 8 characters long.
              </p>
              <p><Icon type={hasNumber ? 'checkmark' : 'x'} />
                Password must have at least 1 number.
              </p>
              <p><Icon type={hasSpecialCharacter ? 'checkmark' : 'x'} />
                Password must have at least 1 special character.
              </p>
              <p><Icon type={hasLowercaseCharacter ? 'checkmark' : 'x'} />
                Password must have at least 1 lowercase character.
              </p>
              <p><Icon type={hasUppercaseCharacter ? 'checkmark' : 'x'} />
                Password must have at least 1 uppercase character.
              </p>
            </div>
          }
          {didAuthFail && <p className='failure'>Incorrect username or password.</p>}
          <Form isSignup={isSignup} handleButtonClick={handleButtonClick} onSubmit={handleAuthFlow}>
            <Input
              onChange={handleInputChange('email')}
              placeholder={`${isSignup ? 'New ' : ''}Email`}
            />
            <Input
              onBlur={handleFocus}
              onChange={(): void => {
                handleInputChange('password');
                if (isSignup) validatePassword();
              }}
              onFocus={handleFocus}
              placeholder={`${isSignup ? 'New ' : ''}Password`}
              password
              ref={passwordRef}
            />
          </Form>
        </StyledLogin>
      )}
    </Alignment>
  );
};

export default Login;
