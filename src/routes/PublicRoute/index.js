import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Public from "../../pages/_layouts/Public";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        <Public>
           <Component {...props}/>
        </Public>
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;