import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Transfer from '../pages/Transfer';
import History from '../pages/History';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/SignUp" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/transfer" component={Transfer} isPrivate />
      <Route path="/history" component={History} isPrivate />
    </Switch>
  );
}
