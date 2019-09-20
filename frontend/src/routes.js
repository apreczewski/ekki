import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import Historic from './pages/Historic';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/transfer" component={Transfer} />
      <Route path="/historic" component={Historic} />
    </Switch>
  );
}
