import React from 'react';
import { ButtonInverted } from './ButtonInvertedStyle';

export default function ButtonInvertedComponent(props) {
  const { type, value, text, disabled, form, icon, ...rest } = props;

  return (
    <ButtonInverted
      className="ButtonInvertedComponent"
      type={type || 'button'}
      form={form || ''}
      value={value || ''}
      disabled={disabled}
      elements={icon ? 1 : 0}
      {...rest}
    >
      {icon}
      {text}
    </ButtonInverted>
  );
}
