import './Header.css';

import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Breadcrumb from './Breadcrumb';
import Avatar from './Avatar';

class Header extends Component {
    render(){
      return (
        <div className="Header ThemeBackground">
          <div className="Logo">
            <Link to="/home" className="HideLink">
              <img src="caesar-logo-white.png" width="42" height="42" alt="Caesar Logo"/>
              CAESAR
            </Link>
          </div>
          <Breadcrumb />
          <Avatar />
        </div>
      )
    }
}

export default Header;
