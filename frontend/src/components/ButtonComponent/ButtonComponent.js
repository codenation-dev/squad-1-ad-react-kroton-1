import React from 'react';
import { Button } from './ButtonStyle';

export default function ButtonComponent(props) {
  const { type, value, text, disabled, form } = props;

  return (
    <Button
      className="ButtonComponent"
      type={type || 'button'}
      form={form || ''}
      value={value || ''}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
