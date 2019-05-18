import React from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

import BasicPage from '../pages/helper/BasicPage';
import LoadingPage from '../pages/public/Loading';
import UserService from '../service/UserService';

export class PrivateComponent extends React.Component {

  state = {
    loading: true,
    isLogged: true,
    isAuthenticated: false,
  }

  async componentDidMount() {
    await this.doAuthenticate();
  }

  async doAuthenticate(){
    const isLogged = await UserService.verifyAuth();
    let isAuthenticated = isLogged;
    if(isLogged && this.props.masterRoute) {
      isAuthenticated = await UserService.verifyMaster();
    }
    this.setState({
      loading: false,
      isLogged,
      isAuthenticated,
    });
  }

  render() {
    const { Component, ...props} = this.props;
    const redirectPath = (this.state.isLogged && this.props.masterRoute) ? '/403' : '/login';

    if (this.state.loading) {
      return <LoadingPage />;
    } else {
      return (
        <React.Fragment>
          {!this.state.isAuthenticated ?
            <Redirect to={{ pathname: redirectPath}} /> :
            <BasicPage>
              <Component {...props} />
            </BasicPage>
          }
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
