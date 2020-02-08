import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SignContainer } from '../../containers';
import api from '../../services/api';
import history from '../../services/history';

export default function Cadastro() {
  const [login, setLogin] = useState({
    name: '',
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

    if (login.name === '' || login.email === '' || login.password === '') {
      toast.error('Preencha todos os dados do formulário!');
    } else {
      try {
        await api.post('/users', login);
        toast.success('Cadastro criado com sucesso');
        history.push('/');
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
    <SignContainer
      login={login}
      onSubmit={handleSubmit}
      onChange={handleChange}
      buttonText="Cadastrar"
      link={<Link to="/">Já tenho uma conta</Link>}
    />
  );
}
