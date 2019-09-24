import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import History from './pages/History';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/createuser" component={CreateUser} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/transfer" component={Transfer} />
      <Route path="/history" component={History} />
    </Switch>
  );
}
