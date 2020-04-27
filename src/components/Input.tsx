import React, { forwardRef } from 'react';

export type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password?: boolean;
  placeholder?: string;
  value?: string;
};

const Input = forwardRef(
  ({ onChange, password, placeholder, value }: InputProps, ref?: React.Ref<HTMLInputElement>) => {
    Input.displayName = 'Input';
    return (
      <input
        onChange={onChange}
        autoComplete={password ? 'on' : undefined}
        placeholder={placeholder}
        type={password ? 'password' : 'text'}
        ref={ref}
        value={value}
      />
    );
  },
);


export default Input;
