import React from 'react';

import { Input, Button, Logo } from '../../components';
import { Container } from './LoginStyle';

export default function LoginContainer({ login, onChange, onSubmit }) {
  return (
    <Container>
      <Logo />
      <form id="form-login" onSubmit={onSubmit}>
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
        <Button type="submit" value="Enviar" form="form-login" text="Login" />
      </form>
    </Container>
  );
}
