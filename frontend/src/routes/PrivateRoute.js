import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { DashLayout, LoginLayout } from '../pages/_layouts';

export default function PrivateRoute({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const { signed } = store.getState().auth;
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && rest.path === '/') {
    return <Redirect to="/painel" />;
  }

  const Layout = signed ? DashLayout : LoginLayout;

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
