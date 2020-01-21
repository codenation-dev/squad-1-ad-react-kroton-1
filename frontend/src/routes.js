import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Cadastro, Login, Painel } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/painel" component={Painel} />
    </Switch>
  );
}
