import React, { useState } from 'react';

import { FormContainer } from '../../containers';

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
    <FormContainer
      login={login}
      onSubmit={handleSubmit}
      onChange={handleChange}
      buttonText="Login"
    />
  );
}
