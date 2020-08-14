import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact to="/products" from="/" />

      <Route path="/products" exact component={Home} />
    </Switch>
  );
}
