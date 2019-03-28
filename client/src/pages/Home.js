import './Home.css';

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

class Home extends Component {
  render(){
    return(
      <div className="HomePage">
        <Sidebar />
        <Header />
      </div>
    )
  }
}

export default withRouter(Home);
