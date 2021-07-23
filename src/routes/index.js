import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Store from "../pages/Stores/Store";
import Product from "../pages/Stores/Product";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import RecoverPassword from "../pages/Auth/RecoverPassword";
import Register from "../pages/Auth/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
        <PublicRoute
          path="/recover-password/:token"
          component={RecoverPassword}
        />
        <PrivateRoute path="/" component={Store} exact />
        <PrivateRoute path="/product/business/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
