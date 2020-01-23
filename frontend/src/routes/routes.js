import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Cadastro, Login, Painel } from '../pages';

import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Login} />
      <PrivateRoute path="/cadastro" component={Cadastro} />
      <PrivateRoute path="/painel" component={Painel} isPrivate />
      <PrivateRoute
        exact
        path="/404"
        component={() => <div>404 - Not Found</div>}
      />
      <PrivateRoute path="*" render={() => <Redirect to="/404" />} />
    </Switch>
  );
}
