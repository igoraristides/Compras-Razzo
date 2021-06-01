import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import Store from '../pages/Stores/Store'
import Product from '../pages/Stores/Product'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={Store} exact />
        <PublicRoute path="/product/business/:id'" component={Product}/> 
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
