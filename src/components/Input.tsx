import React, { forwardRef } from 'react';

export type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password?: boolean;
  placeholder?: string;
};

const Input = forwardRef(
  ({ onChange, password, placeholder }: InputProps, ref?: React.Ref<HTMLInputElement>) => {
    Input.displayName = 'Input';

    const getLabelFor = (str = ''): string => str.toLowerCase().replace(/ /g, '_');

    return (
      <>
        <label
          htmlFor={getLabelFor(placeholder)}
          style={{ display: 'none' }}
        >
          {placeholder}
        </label>
        <input
          onChange={onChange}
          autoComplete={password ? 'on' : undefined}
          placeholder={placeholder}
          type={password ? 'password' : 'text'}
          ref={ref}
        />
      </>
    );
  },
);


export default Input;
