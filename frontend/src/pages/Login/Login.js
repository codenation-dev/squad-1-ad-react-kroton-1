import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/ducks/auth';

import { LoginContainer } from '../../containers';

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

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
      dispatch(signInRequest(login.email, login.password));
    }
  }

  return (
    <LoginContainer
      login={login}
      onSubmit={handleSubmit}
      onChange={handleChange}
      buttonText="Login"
      loading={loading}
      link={<Link to="/cadastro">Ainda não tenho uma conta</Link>}
    />
  );
}
