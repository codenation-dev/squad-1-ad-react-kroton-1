import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Cadastro, Login, Painel, ErrorDetail } from '../pages';

import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Login} />
      <PrivateRoute path="/cadastro" component={Cadastro} />
      <PrivateRoute path="/painel" component={Painel} isPrivate />
      <PrivateRoute path="/errordetail" component={ErrorDetail} isPrivate />
      <PrivateRoute
        exact
        path="/404"
        component={() => <div>404 - Not Found</div>}
      />
      <PrivateRoute path="*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
}
