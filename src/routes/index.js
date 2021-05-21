import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import Home from '../pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={Home} exact />
        <PublicRoute path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
