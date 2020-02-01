import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoginContainer } from '../../containers';
import api from '../../services/api';

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

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.email === '' || login.password === '') {
      toast.error('Preencha todos os dados de login!');
    } else {
      try {
        const response = await api.post('/sessions', login);
        const { token } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        history.push('/painel');
      } catch (error) {
        if (error.response.data.error) {
          toast.error(`erro no servidor: ${error.response.data.error}`);
        } else {
          toast.error('erro no servidor: Inexplicable Error!');
        }
      }
    }
  }

  return (
    <LoginContainer
      login={login}
      onSubmit={handleSubmit}
      onChange={handleChange}
      buttonText="Login"
      link={<Link to="/cadastro">Ainda não tenho uma conta</Link>}
    />
  );
}
