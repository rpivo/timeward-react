import React from 'react';
import { StyledForm } from '@styles/components/Form.styled';

type FormProps = {
  children: React.ReactNode;
};

const Input = (): JSX.Element => <input type="text" />;

const Form = (props: FormProps): JSX.Element =>
  <StyledForm>
    <label>LOGIN</label>
    { props.children }
    <input type="submit" value="SUBMIT" />
  </StyledForm>;

Form.Input = Input;

export default Form;
