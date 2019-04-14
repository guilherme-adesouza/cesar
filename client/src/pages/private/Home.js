import './Home.css';

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import BasicPage from '../helper/BasicPage';

class Home extends Component {
  render(){
    return(
      <BasicPage>
        <h1 className="Title">Dashboard</h1>
      </BasicPage>
    )
  }
}

export default withRouter(Home);
