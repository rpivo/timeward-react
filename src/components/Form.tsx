import React from 'react';
import { StyledForm } from '@styles/components/Form.styled';

const Input = (): JSX.Element => <input />;

type FormProps = {
  children: React.ReactNode;
};

const Form = (props: FormProps): JSX.Element =>
  <StyledForm>
    <label>Login</label>
    { props.children }
    <input type="submit" value="Submit" />
  </StyledForm>;

Form.Input = Input;

export default Form;
