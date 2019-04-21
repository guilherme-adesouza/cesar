import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

import UserService from '../../service/UserService';

class Logout extends Component {

  state = {
    loading: true
  }

  async componentDidMount(){
    await UserService.logout();
    this.setState({loading: false});
  }

  render(){
      if(this.state.loading) return null;
      return (
        <Redirect to="/login"/>
      )
  }
}

export default Logout;
