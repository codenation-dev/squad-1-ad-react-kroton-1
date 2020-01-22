import React from 'react';

import { Input } from './InputStyle';

export default function InputComponent({
  type,
  disabled,
  placeholder,
  ...rest
}) {
  return (
    <Input
      className="InputComponent"
      type={type || 'text'}
      placeholder={placeholder || ''}
      disabled={disabled}
      {...rest}
    />
  );
}
