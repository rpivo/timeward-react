import React from 'react';
import Alignment from '@components/Alignment';
import Form from '@components/Form';

const Login: React.FC = (): JSX.Element =>
  <Alignment vertical horizontal>
      <Form onSubmit={ login } >
        <Form.Input onChange={ handleChange('email') } placeholder='Email Address' />
        <Form.Input onChange={ handleChange('password') } placeholder='Password' password />
      </Form>
  </Alignment>;

export default Login;
