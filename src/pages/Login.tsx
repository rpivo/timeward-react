import React from 'react';
import Alignment from '@components/Alignment';
import Form from '@components/Form';

export const Login = (): JSX.Element =>
  <Alignment vertical horizontal>
    <Form>
      <Form.Input />
      <Form.Input />
    </Form>
  </Alignment>;
