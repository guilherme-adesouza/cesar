import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

import Api from '../../service/Api';

class Logout extends Component {

  state = {
    loading: true
  };

  async componentDidMount(){
    await Api.User.logout();
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
