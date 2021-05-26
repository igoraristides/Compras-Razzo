import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import Stores from '../pages/Stores'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={Stores} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
