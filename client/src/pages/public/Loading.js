import './Loading.css';

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Logo from '../../components/Logo';
import LoadingBar from '../../components/LoadingBar';

class Loading extends Component {
  render(){
    return(
      <div className="LoadingPage">
        <Logo size={150}/>
        <LoadingBar />
      </div>
    )
  }
}

export default withRouter(Loading);
