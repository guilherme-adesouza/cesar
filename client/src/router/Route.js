import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

import UserService from '../service/UserService';

export class PrivateComponent extends React.Component {

  state = {
    loading: true,
    isAuthenticated: false,
  }

  componentDidMount() {
    this.doAuthenticate();
  }

  async doAuthenticate(){
    const isAuthenticated = await UserService.verifyAuth();
    this.setState({
      loading: false,
      isAuthenticated,
    });
  }

  render() {
    const { Component, ...props} = this.props;
    if (this.state.loading) {
      return <div>LOADING</div>;
    } else {
      return (
        <div>
          {!this.state.isAuthenticated && <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />}
          <Component {...props} />
        </div>
      )
    }
  }
}

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={props => (<PrivateComponent Component={Component} {...props}/>)}/>
  )
}
