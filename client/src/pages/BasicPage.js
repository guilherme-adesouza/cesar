import './BasicPage.css';

import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

class BasicPage extends Component {
  render(){
    return(
      <div className="Page" style={{heigth: '100%'}}>
        <Sidebar />
        <div className="MainContent">
          <Header />
          <div className="Content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default BasicPage;
