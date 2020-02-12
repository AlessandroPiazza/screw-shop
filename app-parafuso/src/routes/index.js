import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewScrew from '../pages/NewScrew';
import Product from '../pages/Product';

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} isPrivate/>
        <Route path="/newScrew" exact component={NewScrew} isPrivate/>
        <Route path="/products/:id" exact component={Product} isPrivate/>
    </Switch>
  );
}
