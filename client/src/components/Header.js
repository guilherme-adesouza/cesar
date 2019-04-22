import './Header.css';

import React, {Component} from 'react';

import Breadcrumb from './Breadcrumb';
import Avatar from './Avatar';

class Header extends Component {
    render(){
      return (
        <div className="Header ThemeBackground">
          <Breadcrumb />
          <Avatar />
        </div>
      )
    }
}

export default Header;
