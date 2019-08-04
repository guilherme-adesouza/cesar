import './BasicPage.css';

import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

class BasicPage extends Component {

  state = {
    openSidebar: false,
  };

  toggleSidebar = (status) => {
    const openSidebar = !!status ? status : !this.state.openSidebar;
    this.setState({openSidebar});
  };

  render() {
    if(window.location.pathname === '/login') {
      return (
          this.props.children
      )
    }
    return(
      <div className="Page" style={{heigth: '100%'}}>
        <Header />
        <div className={`PageWrapper ${this.state.openSidebar ? 'OpenSidebar' : 'CloseSidebar'}`}>
          <Sidebar toggleSidebar={this.toggleSidebar} open={this.state.openSidebar}/>
          <div className="MainContent">
            <div className="Content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BasicPage;
