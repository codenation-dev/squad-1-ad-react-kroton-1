import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { DashLayout, LoginLayout } from '../pages/_layouts';

import { store } from '../store';

export default function PrivateRoute({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { isLogged } = store.getState().auth;

  if (!isLogged && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isLogged && rest.path === '/') {
    return <Redirect to="/painel" />;
  }

  const Layout = isLogged ? DashLayout : LoginLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
