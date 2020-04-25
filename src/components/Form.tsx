import React from 'react';
import { InputProps } from '@components/Input';
import { StyledForm } from '@styles/components/Form.styled';

type FormProps = {
  children: React.ReactNode;
  handleLabelClick: (label: string) => void;
  isSignup: boolean;
  onSubmit: () => void;
};

type FormComposition = { Input?: React.FC<InputProps> };

const Form: React.FC<FormProps> & FormComposition =
  ({ children, onSubmit, handleLabelClick, isSignup }: FormProps): JSX.Element =>
    <StyledForm>
      <label
        className={`label-login ${!isSignup ? 'active' : ''}`}
        onClick={(): void => handleLabelClick('login')}
      >
        LOGIN
      </label>
      <label
        className={`label-signup ${isSignup ? 'active' : ''}`}
        onClick={(): void => handleLabelClick('signup')}
      >
        SIGN UP
      </label>
      {children}
      <input onClick={onSubmit} type='submit' value={isSignup ? 'SIGN UP' : 'LOGIN'} />
    </StyledForm>;

export default Form;
