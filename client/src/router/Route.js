import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

import LoadingPage from '../pages/Loading';
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
    const isAuthenticated = this.props.masterRoute ? await UserService.verifyMaster() : await UserService.verifyAuth();
    this.setState({
      loading: false,
      isAuthenticated,
    });
  }

  render() {
    const { Component, ...props} = this.props;
    const redirectPath = this.props.masterRoute ? '/403' : '/login';

    if (this.state.loading) {
      return <LoadingPage />;
    } else {
      return (
        <React.Fragment>
          {!this.state.isAuthenticated && <Redirect to={{ pathname: redirectPath, state: { from: this.props.location } }} />}
          <Component {...props} />
        </React.Fragment>
      )
    }
  }
}

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={props => (<PrivateComponent Component={Component} {...props}/>)}/>
  )
}

export function MasterRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={props => (<PrivateComponent Component={Component} masterRoute={true} {...props}/>)}/>
  )
}
