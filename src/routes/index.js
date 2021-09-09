import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";
import Store from "../pages/Stores/Store";
import Product from "../pages/Stores/Product";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import RecoverPassword from "../pages/Auth/RecoverPassword";
import Register from "../pages/Auth/Register";
import Profile from "../pages/Profile";
import CreditCard from "../pages/CreditCard";
import Order from "../pages/Order";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <AuthRoute path="/forgot-password" component={ForgotPassword} />
        <AuthRoute
          path="/recover-password/:token"
          component={RecoverPassword}
        />
        <PrivateRoute path="/" component={Store} exact />
        <PrivateRoute path="/product/business/:id" component={Product} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/addCard" component={CreditCard} />
        <PrivateRoute path="/finalizingOrder" component={Order} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
