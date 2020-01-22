import React, { useState } from 'react';
import './login.css';

import { LoginContainer } from '../../containers';

export default function Login({ history }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    history.push('/painel');
  }

  return (
    <LoginContainer
      login={login}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
