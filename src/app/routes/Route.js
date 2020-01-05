import React from "react";
import Proptypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { store } from "./../store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/students" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: Proptypes.bool,
  component: Proptypes.oneOfType([Proptypes.element, Proptypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
