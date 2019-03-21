import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Home extends Component {
  render(){
    return(
      <h1 className="Title">Home</h1>
    )
  }
}

export default withRouter(Home);
