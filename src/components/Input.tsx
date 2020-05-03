import React, { forwardRef } from 'react';

export type InputProps = {
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  password?: boolean;
  placeholder?: string;
};

const Input = forwardRef(({
  onBlur,
  onChange,
  onFocus,
  password,
  placeholder,
}: InputProps, ref?: React.Ref<HTMLInputElement>) => {
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
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
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
