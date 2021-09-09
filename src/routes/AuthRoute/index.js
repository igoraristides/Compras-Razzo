import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import Public from "../../pages/_layouts/Public";

const LoginRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Public>
          {!token ? <Component {...props} /> : <Redirect to="/" />}
        </Public>
      )}
    />
  );
};

LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LoginRoute;
