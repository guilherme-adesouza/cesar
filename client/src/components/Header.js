import './Header.css';

import React, {Component} from 'react';

import Breadcrumb from './Breadcrumb';
import Avatar from './Avatar';

class Header extends Component {
    render(){
      return (
        <div className="Header">
          <Breadcrumb />
          <Avatar />
        </div>
      )
    }
}

export default Header;
