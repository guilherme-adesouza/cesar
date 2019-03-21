import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

export class auth {
  static isAuthenticated = false;
  authenticate(cb) {
    this.isAuthenticated = true;
  };
  signout(cb) {
    this.isAuthenticated = false;
  };
};

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
