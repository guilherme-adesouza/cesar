import './Loading.css';

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Loading extends Component {
  render(){
    return(
      <div className="LoadingPage">
        <h1 className="Title">Loading...</h1>
      </div>
    )
  }
}

export default withRouter(Loading);
