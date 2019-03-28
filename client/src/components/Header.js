import './Header.css';

import React, {Component} from 'react';

import Breadcrumb from './Breadcrumb';

class Header extends Component {
    render(){
      return (
        <div className="Header">
          <Breadcrumb />
          <span className="Username">Seu nome de corno</span>
          <span className="UserPhoto">Seu ícone com chifres</span>
        </div>
      )
    }
}

export default Header;
