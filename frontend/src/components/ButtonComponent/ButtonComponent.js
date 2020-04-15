import React from 'react';
import { Button } from './ButtonStyle';

export default function ButtonComponent(props) {
  const {
    type,
    value,
    text,
    disabled,
    form,
    icon,
    inverted,
    highlight,
    ...rest
  } = props;

  return (
    <Button
      className="ButtonComponent"
      type={type || 'button'}
      form={form || ''}
      value={value || ''}
      disabled={disabled}
      elements={icon ? 1 : 0}
      inverted={inverted}
      highlight={highlight}
      {...rest}
    >
      {icon}
      {text}
    </Button>
  );
}
