import './Player.css';

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

class Player extends Component {
  render(){
    return(
      <div className="PlayerPage">
        <Sidebar />
        <Header />
      </div>
    )
  }
}

export default withRouter(Player);
