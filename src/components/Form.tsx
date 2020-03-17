import React from 'react';
import { StyledForm } from '@styles/components/Form.styled';

type FormProps = { children: React.ReactNode };

type FormComposition = { Input: React.FC };

const Input: React.FC = (): JSX.Element => <input type="text" />;

const Form: React.FC<FormProps> & FormComposition = ({ children }: FormProps): JSX.Element =>
  <StyledForm>
    <label>LOGIN</label>
    { children }
    <input type="submit" value="SUBMIT" />
  </StyledForm>;

Form.Input = Input;

export default Form;
