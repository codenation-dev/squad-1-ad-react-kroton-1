import React from 'react';

import { Input, Button, Logo } from '../../components';
import { Container } from './FormStyle';

export default function FormContainer({
  login,
  onChange,
  onSubmit,
  buttonText,
  link,
}) {
  return (
    <Container>
      <Logo />
      <form id="form-container" onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={login.email}
          onChange={e => onChange(e)}
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          value={login.password}
          onChange={onChange}
        />
        <Button
          type="submit"
          value="Enviar"
          form="form-container"
          text={buttonText}
        />
        {link}
      </form>
    </Container>
  );
}
