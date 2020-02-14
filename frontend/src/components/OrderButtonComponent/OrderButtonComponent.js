import React from 'react';
import { Button } from './OrderButtonStyle';

export default function OrderButtonComponent(props) {
  const { type, value, disabled, form, icon, inverted, ...rest } = props;

  return (
    <Button
      type={type || 'button'}
      form={form || ''}
      value={value || ''}
      disabled={disabled}
      inverted={inverted}
      {...rest}
    >
      {icon}
    </Button>
  );
}
