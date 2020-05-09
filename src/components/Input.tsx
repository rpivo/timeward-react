import React, { forwardRef } from 'react';

export type InputProps = {
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onFocus?: () => void;
  readonly password?: boolean;
  readonly placeholder?: string;
};

const Input = forwardRef(({
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
