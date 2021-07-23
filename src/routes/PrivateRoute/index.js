import React from "react";

import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import Private from "../../pages/_layouts/Private";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Private>
          <Component {...props} />
        </Private>
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
