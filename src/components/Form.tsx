import React from 'react';
import { InputProps } from '@components/Input';
import { StyledForm } from '@styles/components/Form.styled';

type FormProps = {
  children: React.ReactNode;
  handleButtonClick: (label: string) => void;
  isSignup: boolean;
  onSubmit: (event: React.FormEvent<HTMLInputElement>) => void;
};

type FormComposition = { Input?: React.FC<InputProps> };

const Form: React.FC<FormProps> & FormComposition =
  ({ children, onSubmit, handleButtonClick, isSignup }: FormProps): JSX.Element =>
    <StyledForm>
      <div className='button-wrapper'>
        <div
          className={`button login ${!isSignup ? 'active' : ''}`}
          onClick={(): void => handleButtonClick('login')}
          role='button'
        >
          LOGIN
        </div>
        <div
          className={`button signup ${isSignup ? 'active' : ''}`}
          onClick={(): void => handleButtonClick('signup')}
          role='button'
        >
          SIGN UP
        </div>
      </div>
      {children}
      <input onClick={onSubmit} type='submit' value={isSignup ? 'SIGN UP' : 'LOGIN'} />
    </StyledForm>;

export default Form;
