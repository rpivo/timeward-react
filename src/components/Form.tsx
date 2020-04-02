import React from 'react';
import { InputProps } from '@components/Input';
import { StyledForm } from '@styles/components/Form.styled';

type FormProps = {
  children: React.ReactNode;
  onSubmit: () => void;
};

type FormComposition = { Input?: React.FC<InputProps> };

const Form: React.FC<FormProps> & FormComposition =
  ({ children, onSubmit }: FormProps): JSX.Element =>
    <StyledForm>
      <label>LOGIN</label>
      { children }
      <input onClick={ onSubmit } type="submit" value="SUBMIT" />
    </StyledForm>;

export default Form;
